# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision
Rockwell H2 is an industrial hydrogen infrastructure company. The new website will be the high-performance, polished digital face of the company, prioritizing speed, stability, and a "premium infrastructure" aesthetic. It replaces all previous implementations and serves as the canonical source.

## Technical Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Sanity Studio (Free Tier)
- **Animation**: Framer Motion (Lightweight, performance-first)
- **Hosting**: Netlify
- **Banned**: WebGL, Three.js, React Three Fiber (to ensure performance on all devices)

## Visual Direction
- **Vibe**: Bright, clean, optimistic, high-tech but trustworthy.
- **Palette**: Light backgrounds, electric blues/teals, soft gradients, subtle glows.
- **Motion**: keyframes/transitions for reveals, parallax, and micro-interactions. NO heavy GPU effects.
- **Tone**: Energy forward, not dark or industrial.

## Performance Constraints
- **Core Web Vitals**: Excellent scores required.
- **Mobile**: Prioritize iPhone and Android speed/stability.
- **Media**: All optimized, lazy loaded.
- **Animation**: CSS transforms preferred; reduced motion preferences respected.

## Success Criteria
- [ ] Repo `https://github.com/rockwellh2/rockwell-sanity.git` is the single source of truth.
- [ ] Site loads instantly on mobile.
- [ ] CMS (Sanity) is fully integrated for easy editing.
- [ ] Visuals match the "premium infrastructure" and "electric blue/light" aesthetic.
