"use client";

import { useEffect, useRef } from "react";

export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: true,
      premultipliedAlpha: true,
      powerPreference: "low-power",
    });

    if (!gl) {
      console.error("WebGL not supported");
      canvas.style.display = "none";
      return;
    }

    const vs = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main(){
        vUv = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;

    const fs = `
      precision mediump float;
      varying vec2 vUv;
      uniform vec2 uRes;
      uniform float uTime;

      mat2 rot(float a){
        float s = sin(a), c = cos(a);
        return mat2(c,-s,s,c);
      }

      float field(vec3 p){
        float t = uTime;

        // Gentle orbital rotation
        p.xz *= rot(t * 0.08);

        // Cheap domain warp for "ribbons"
        p.x += sin(p.z * 0.75 + t * 0.9) * 0.34;
        p.z += cos(p.x * 0.65 + t * 0.7) * 0.34;

        // Ribbon surface near y=0
        float wave = sin(p.x * 1.25 + t) * cos(p.z * 1.05 + t * 0.85) * 0.55;
        return p.y - wave;
      }

      vec3 coolGradient(float x){
        // 4-stop cool gradient: deep navy -> indigo -> cyan -> mint
        vec3 a = vec3(0.03, 0.07, 0.18);
        vec3 b = vec3(0.19, 0.23, 0.72);
        vec3 c = vec3(0.06, 0.78, 0.95);
        vec3 d = vec3(0.15, 0.95, 0.70);

        x = clamp(x, 0.0, 1.0);

        if (x < 0.33) {
          float t = x / 0.33;
          return mix(a, b, t);
        } else if (x < 0.66) {
          float t = (x - 0.33) / 0.33;
          return mix(b, c, t);
        } else {
          float t = (x - 0.66) / 0.34;
          return mix(c, d, t);
        }
      }

      void main(){
        vec2 uv = (gl_FragCoord.xy / uRes.xy) * 2.0 - 1.0;
        uv.x *= uRes.x / uRes.y;

        float t = uTime;

        // Camera
        vec3 ro = vec3(0.0, 1.85, 4.2);
        ro.xz *= rot(t * 0.06);

        vec3 ta = vec3(0.0, 0.0, 0.0);
        vec3 ww = normalize(ta - ro);
        vec3 uu = normalize(cross(vec3(0.0,1.0,0.0), ww));
        vec3 vv = cross(ww, uu);
        vec3 rd = normalize(uu * uv.x + vv * uv.y + ww * 1.65);

        // Light mode background (tinted for visibility)
        vec3 bg = vec3(0.92, 0.94, 0.97);

        // Raymarch (16 steps max)
        float distTravel = 0.0;
        float glow = 0.0;

        for (int i = 0; i < 16; i++) {
          vec3 p = ro + rd * distTravel;
          float d = field(p);

          float ad = abs(d);
          glow += 0.038 / (ad + 0.07);

          // Increased step clamp slightly (cheaper)
          float stepSize = clamp(ad * 0.62, 0.05, 0.34);
          distTravel += stepSize;

          if (distTravel > 9.0) break;
        }

        // Vignette keeps edges quiet
        float vign = smoothstep(1.35, 0.18, length(uv));

        // Glow shaping
        float g = clamp(glow * 0.11, 0.0, 1.0);
        g *= vign;

        // Color coordinate: mix screen position and time for a "cool gradient wash"
        float gradPos = 0.55 * (vUv.x) + 0.45 * (vUv.y);
        gradPos += 0.08 * sin(uTime * 0.7 + uv.x * 1.2);

        vec3 energy = coolGradient(gradPos);

        // Blend energy into background based on glow - Increased visibility
        vec3 col = mix(bg, energy, g * 0.85);

        // Soft highlight band to add depth without extra marching
        float band = smoothstep(0.0, 1.0, 0.5 + 0.5 * sin(uv.y * 1.4 + uTime * 0.5));
        col += energy * (0.05 * band * vign);

        // Cheap gamma-ish correction
        col = sqrt(max(col, 0.0));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;

    const vsShader = compile(gl.VERTEX_SHADER, vs);
    const fsShader = compile(gl.FRAGMENT_SHADER, fs);

    if (!vsShader || !fsShader) return;

    gl.attachShader(prog, vsShader);
    gl.attachShader(prog, fsShader);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");

    function resize() {
      if (!canvas || !gl) return;
      const dpr = 1.0;

      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        if (uRes) gl.uniform2f(uRes, w, h);
      }
    }

    window.addEventListener("resize", resize, { passive: true });
    resize();

    let running = true;
    let lastFrameTime = 0;
    const frameInterval = 1000 / 30;

    let requestId: number;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function frame(now: number) {
      if (!running) return;

      if (now - lastFrameTime >= frameInterval) {
        lastFrameTime = now;
        const t = reduceMotion ? 0.0 : now * 0.00045;

        if (gl && uTime) {
          gl.uniform1f(uTime, t);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
      }

      requestId = requestAnimationFrame(frame);
    }

    requestId = requestAnimationFrame(frame);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(requestId);
      if (gl && prog) {
        gl.deleteProgram(prog);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="c"
      className="fixed inset-0 w-full h-full -z-30 pointer-events-none opacity-80 mix-blend-multiply transition-opacity duration-1000"
      style={{ filter: "blur(40px)" }} // Heavy blur for "cool background effect blurred out"
    />
  );
}
