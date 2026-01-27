"use client";

import { useEffect, useRef } from "react";

/**
 * HydrogenBackground - Three.js WebGL shader background
 * 
 * Renders a soft hydrogen nebula with orbital clouds, nucleus, and electron rings.
 * Optimized for performance: capped DPR, single-pass blur, no raymarch loops.
 */
export function HydrogenBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId: number;
    let cleanup = false;

    // Dynamic import Three.js to avoid SSR issues
    import("three").then((THREE) => {
      if (cleanup) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
        powerPreference: "default",
      });
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const uniforms = {
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(1, 1) },
        uDpr: { value: 1 },

        // Style tuning
        uIntensity: { value: 1.1 }, // Increased execution
        uSpeed: { value: 0.18 },
        uWhiten: { value: 0.35 }, // Reduced whiten for more color
        uGrain: { value: 0.02 },

        // Softness
        uBlur: { value: 1.4 },
        uBloom: { value: 0.30 },

        // Hydrogen atom
        uAtomStrength: { value: 0.70 },
        uAtomScale: { value: 0.65 },
        uAtomDrift: { value: 0.05 },
        uAtomSharp: { value: 0.45 },

        // Performance
        uQuality: { value: 1.0 },
      };

      const vertexShader = /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `;

      const fragmentShader = /* glsl */ `
        precision highp float;

        uniform float uTime;
        uniform vec2  uRes;
        uniform float uDpr;

        uniform float uIntensity;
        uniform float uSpeed;
        uniform float uWhiten;
        uniform float uGrain;

        uniform float uBlur;
        uniform float uBloom;

        uniform float uAtomStrength;
        uniform float uAtomScale;
        uniform float uAtomDrift;
        uniform float uAtomSharp;

        uniform float uQuality;

        varying vec2 vUv;

        float hash21(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }

        float noise2(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash21(i);
          float b = hash21(i + vec2(1.0, 0.0));
          float c = hash21(i + vec2(0.0, 1.0));
          float d = hash21(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        float fbm3(vec2 p) {
          float f = 0.0;
          float a = 0.55;
          mat2 m = mat2(0.80, 0.60, -0.60, 0.80);
          for (int i = 0; i < 3; i++) {
            f += a * noise2(p);
            p = m * p * 2.03;
            a *= 0.5;
          }
          return f;
        }

        vec3 hydrogenBackdrop(vec2 q, float t) {
          float r = length(q);

          vec2 p = q * 1.35;
          p += vec2(0.10 * sin(t * 0.22), 0.12 * cos(t * 0.18));
          float n1 = fbm3(p * 1.15 + 0.12 * t);
          float n2 = fbm3(p * 2.15 - 0.08 * t);

          float clouds = smoothstep(0.18, 1.0, 0.62 * n1 + 0.38 * n2);
          clouds *= exp(-r * 0.75);

          vec3 white = vec3(0.96, 0.985, 1.0);
          // More vibrant colors
          vec3 mint  = vec3(0.10, 0.90, 0.60); // Vibrant emerald/mint
          vec3 azure = vec3(0.10, 0.50, 0.95); // Deep vivid azure

          float k = 0.5 + 0.5 * sin(t * 0.12 + q.x * 1.1);
          vec3 base = mix(mint, azure, k);
          base = mix(base, white, uWhiten);

          float halo = exp(-r * 2.2) * (0.55 + 0.45 * sin(t * 0.10 + q.y * 1.2));
          vec3 col = base * (0.22 + 0.78 * clouds) + white * halo * 0.30;

          return col;
        }

        vec3 softTunnel(vec2 q, float t) {
          float r = max(1e-3, length(q));
          float a = atan(q.y, q.x);
          float twist = 0.25 * sin(t * 0.30) + 0.30 * fbm3(vec2(a * 1.2, t * 0.12));
          a += twist;

          float rays = pow(abs(sin(a * 72.0 + t * 0.55)), 10.0);
          float core = exp(-r * 2.6);
          float streak = smoothstep(0.0, 1.0, (1.0 / r) * 0.08);

          float s = (0.45 * rays + 0.18) * core * streak;
          vec3 white = vec3(0.98, 0.99, 1.0);
          vec3 mint  = vec3(0.10, 0.90, 0.60); // Consistent vibrant mint
          vec3 azure = vec3(0.10, 0.50, 0.95); // Consistent vibrant azure
          vec3 col = mix(mint, azure, 0.5 + 0.5 * sin(t * 0.22 + a));
          col = mix(col, white, uWhiten);
          return col * s;
        }

        mat2 rot2(float a) {
          float s = sin(a), c = cos(a);
          return mat2(c, -s, s, c);
        }

        vec3 atomEffect(vec2 q, float t) {
          vec2 drift = uAtomDrift * vec2(sin(t * 0.23), cos(t * 0.19));
          vec2 p = (q - drift) / max(1e-3, uAtomScale);

          float rn = length(p);
          float nucleus = exp(-rn * rn * 18.0) * 1.2;

          float ang = t * 0.55;
          vec2 pr1 = rot2(ang) * p;
          vec2 pr2 = rot2(-ang * 0.77 + 1.2) * p;

          float lobeA = exp(-dot(pr1, pr1) * (6.5 + 3.0 * uAtomSharp));
          lobeA *= smoothstep(0.0, 1.0, 0.55 + 0.45 * cos(6.0 * atan(pr1.y, pr1.x)));

          float lobeB = exp(-dot(pr2, pr2) * (5.8 + 2.5 * uAtomSharp));
          lobeB *= smoothstep(0.0, 1.0, 0.55 + 0.45 * cos(4.0 * atan(pr2.y, pr2.x) + 1.3));

          float shell = exp(-abs(rn - 0.55) * (10.0 + 6.0 * uAtomSharp)) * 0.55;

          float cloud = 0.55 * lobeA + 0.45 * lobeB + shell;
          cloud *= exp(-rn * 1.2);

          float ringR = 0.78;
          float ringW = 0.020 + 0.018 * (1.0 - uQuality);
          vec2 rp1 = rot2(0.8) * p;
          vec2 rp2 = rot2(-0.9) * p;

          float ring1 = exp(-abs(length(rp1) - ringR) / ringW) * 0.45;
          float ring2 = exp(-abs(length(rp2) - ringR) / ringW) * 0.35;

          float eT = t * 0.95;
          vec2 e1 = vec2(cos(eT), sin(eT)) * ringR;
          vec2 e2 = vec2(cos(-eT * 0.83 + 1.4), sin(-eT * 0.83 + 1.4)) * ringR;

          float bead1 = exp(-dot(rp1 - e1, rp1 - e1) * 120.0) * 1.2;
          float bead2 = exp(-dot(rp2 - e2, rp2 - e2) * 120.0) * 1.0;

          float energy = nucleus + 0.85 * cloud + ring1 + ring2 + bead1 + bead2;

          vec3 white = vec3(0.98, 0.99, 1.0);
          vec3 mint  = vec3(0.10, 0.90, 0.60);
          vec3 azure = vec3(0.10, 0.50, 0.95);

          float hueK = smoothstep(0.15, 1.15, energy);
          vec3 col = mix(mint, azure, hueK);
          col = mix(col, white, uWhiten);

          col *= energy;
          return col;
        }

        vec3 sampleScene(vec2 uv, float t) {
          vec2 q = uv * 2.0 - 1.0;
          q.x *= uRes.x / uRes.y;

          vec3 base = hydrogenBackdrop(q, t);
          vec3 rays = softTunnel(q, t);
          vec3 atom = atomEffect(q, t) * uAtomStrength;

          vec3 col = base + rays + atom;

          float r = length(q);
          float vig = smoothstep(1.35, 0.25, r);
          col *= 0.40 + 0.60 * vig;

          return col;
        }

        void main() {
          float t = uTime * uSpeed;

          vec2 px = 1.0 / max(uRes, vec2(1.0));
          float blurPx = uBlur * (1.0 + 0.35 * uDpr) * mix(0.85, 1.35, 1.0 - uQuality);
          vec2 b = px * blurPx;

          vec3 c0 = sampleScene(vUv, t);
          vec3 c1 = sampleScene(vUv + vec2(b.x, 0.0), t);
          vec3 c2 = sampleScene(vUv - vec2(b.x, 0.0), t);
          vec3 c3 = sampleScene(vUv + vec2(0.0, b.y), t);
          vec3 c4 = sampleScene(vUv - vec2(0.0, b.y), t);

          vec3 col = (c0 * 0.50) + (c1 + c2 + c3 + c4) * 0.125;

          float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
          float bloom = smoothstep(0.55, 1.25, lum) * uBloom;
          col += col * bloom;

          col *= uIntensity;
          col = col / (1.0 + col);
          col = pow(col, vec3(0.95));

          float g = (hash21(vUv * uRes + uTime) - 0.5) * uGrain;
          col += g;

          gl_FragColor = vec4(col, 1.0);
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        depthTest: false,
        depthWrite: false,
        transparent: true,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
      scene.add(quad);

      function resize() {
        const w = Math.max(1, window.innerWidth);
        const h = Math.max(1, window.innerHeight);

        const rawDpr = window.devicePixelRatio || 1;
        const dpr = Math.min(1.5, rawDpr);

        const pixels = w * h * dpr * dpr;
        uniforms.uQuality.value = pixels > 3.5e6 ? 0.8 : 1.0;

        renderer.setPixelRatio(dpr);
        renderer.setSize(w, h, false);

        uniforms.uRes.value.set(w * dpr, h * dpr);
        uniforms.uDpr.value = dpr;
      }

      const start = performance.now();
      function animate(now: number) {
        if (cleanup) return;
        uniforms.uTime.value = (now - start) * 0.001;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      }

      window.addEventListener("resize", resize, { passive: true });
      resize();
      animationId = requestAnimationFrame(animate);

      // Cleanup function for React strict mode
      return () => {
        cleanup = true;
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        renderer.dispose();
        material.dispose();
        quad.geometry.dispose();
      };
    });

    return () => {
      cleanup = true;
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{
        opacity: 0.35,
        filter: "blur(8px)",
      }}
      aria-hidden="true"
    />
  );
}
