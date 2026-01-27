"use client";

import { useEffect, useRef } from "react";

/**
 * GradientShader - A premium, subtle animated background for content pages.
 * Uses WebGL for smooth, noise-based gradient flow.
 */
export function GradientShader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl");
        if (!gl) return;

        let animationId: number;
        let cleanup = false;

        // Shader sources
        const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

        const fsSource = `
      precision mediump float;
      uniform vec2 uResolution;
      uniform float uTime;

      // Simple noise function
      float hash(float n) { return fract(sin(n) * 43758.5453123); }
      float noise(vec2 x) {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);
        float n = p.x + p.y*57.0;
        return mix(mix(hash(n+0.0), hash(n+1.0),f.x),
                   mix(hash(n+57.0), hash(n+58.0),f.x),f.y);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        float t = uTime * 0.2;
        
        // Premium palette: Slate/White/Emerald hints
        // Base: Very light slate/white
        vec3 colorA = vec3(0.98, 0.99, 1.0); 
        // Accent 1: Soft Emerald
        vec3 colorB = vec3(0.90, 0.98, 0.94);
        // Accent 2: Soft Blue/Slate
        vec3 colorC = vec3(0.92, 0.95, 0.98);

        float n1 = noise(st * 3.0 + t);
        float n2 = noise(st * 5.0 - t * 1.5);

        vec3 color = mix(colorA, colorB, n1);
        color = mix(color, colorC, n2 * 0.5);

        // Vignette
        float d = distance(st, vec2(0.5));
        color *= 1.0 - d * 0.15;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

        // Boilerplate WebGL setup
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
        gl.shaderSource(vertexShader, vsSource);
        gl.compileShader(vertexShader);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
        gl.shaderSource(fragmentShader, fsSource);
        gl.compileShader(fragmentShader);

        const program = gl.createProgram()!;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        const positionAttributeLocation = gl.getAttribLocation(program, "aVertexPosition");
        const resolutionLocation = gl.getUniformLocation(program, "uResolution");
        const timeLocation = gl.getUniformLocation(program, "uTime");

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl?.viewport(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener("resize", resize);
        resize();

        const startTime = performance.now();

        function render(now: number) {
            if (cleanup || !gl) return;
            gl.useProgram(program);
            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

            gl.uniform2f(resolutionLocation, canvas!.width, canvas!.height);
            gl.uniform1f(timeLocation, (now - startTime) * 0.001);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            animationId = requestAnimationFrame(render);
        }

        animationId = requestAnimationFrame(render);

        return () => {
            cleanup = true;
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
            gl.deleteProgram(program);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
        />
    );
}
