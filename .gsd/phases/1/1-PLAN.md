---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: New Design System Foundation

## Objective
Replace the "Industrial Premium" palette and typography with the new warm, approachable "Conversion Machine" design system. This establishes the visual foundation for all subsequent pages.

## Context
- .gsd/ROADMAP.md (Phase 1 requirements)
- src/app/globals.css (current design tokens)
- src/app/layout.tsx (font loading)
- rockwell-h2_StyleExample/rockwell_h2_a_plus_guide.md (target aesthetic)

## Tasks

<task type="auto">
  <name>Update layout.tsx with new fonts</name>
  <files>src/app/layout.tsx</files>
  <action>
    Replace font imports:
    - Change Outfit → Sora (bold, industrial, trustworthy headings)
    - Change Inter → Plus_Jakarta_Sans (modern, warm body text)
    - Keep JetBrains_Mono → IBM_Plex_Mono (technical data font)
    
    Update CSS variables:
    - --font-heading → Sora
    - --font-sans → Plus Jakarta Sans
    - --font-mono → IBM Plex Mono
    
    Remove BackgroundController import (shader from old design)
    Remove the slate-50/60 contrast overlay div
  </action>
  <verify>npm run build (no import errors)</verify>
  <done>All three fonts load correctly, no TypeScript errors</done>
</task>

<task type="auto">
  <name>Replace color palette in globals.css</name>
  <files>src/app/globals.css</files>
  <action>
    Replace :root color variables with new "Conversion Machine" palette:
    
    /* Hydrogen Blue - hydrogen flame */
    --h2-blue-50: #e6f4ff;
    --h2-blue-500: #1890ff;
    --h2-blue-900: #003a70;
    
    /* Agricultural Green - primary */
    --ag-green-50: #f0f9f4;
    --ag-green-500: #10b981;
    --ag-green-600: #059669;
    --ag-green-700: #047857;
    
    /* Energy Gold - ROI/money */
    --energy-gold-50: #fef7ec;
    --energy-gold-500: #f59e0b;
    --energy-gold-600: #d97706;
    
    /* Slate grays - keep but update primary/accent mappings */
    --primary: var(--ag-green-600);
    --accent: var(--energy-gold-500);
    
    Remove old "Industrial Premium" comments
    Remove blueprint-card, hud-text utilities (old aesthetic)
  </action>
  <verify>Grep for "INDUSTRIAL PREMIUM" returns 0 matches</verify>
  <done>New color tokens defined, old theme removed</done>
</task>

<task type="auto">
  <name>Add new animation utilities</name>
  <files>src/app/globals.css</files>
  <action>
    Add keyframes for new animations:
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    Add utility classes:
    .animate-fadeInUp
    .animate-blob
    .animation-delay-2000
    .animation-delay-4000
  </action>
  <verify>Build succeeds, animation utilities available</verify>
  <done>New animation keyframes defined in globals.css</done>
</task>

## Success Criteria
- [ ] Sora, Plus Jakarta Sans, IBM Plex Mono fonts load correctly
- [ ] New color palette (Green/Gold/Blue/Slate) defined
- [ ] Old Industrial Premium styling removed
- [ ] New animation utilities available
- [ ] `npm run build` passes without errors
