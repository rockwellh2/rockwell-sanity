---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: New Homepage Build

## Objective
Replace the existing Industrial Premium homepage with the new warm, approachable "Conversion Machine" homepage optimized for farms, warehouses, and SMBs.

## Context
- .gsd/ROADMAP.md (Phase 2 requirements)
- src/app/page.tsx (current homepage - to be replaced)
- rockwell-h2_StyleExample/rockwell_h2_a_plus_guide.md (target design)
- User's example React component (single-page warm design)

## Tasks

<task type="auto">
  <name>Create new Homepage with all sections</name>
  <files>src/app/page.tsx</files>
  <action>
    Replace entire homepage with new structure:
    
    1. HERO SECTION
       - Badge: "Family-Owned Engineering"
       - Headline: "Turn Your Renewable Energy Into Reliable Hydrogen Fuel"
       - Subhead with $3/kg tax credit hook
       - CTAs: "Calculate Savings" (primary), "See How It Works" (secondary)
       - Image: HydrogenTanks.png with stats overlay (225 kg H2/day, +$675/day credit)
       - Animated background blobs
    
    2. PROBLEM SECTION
       - 4 pain points grid:
         - Rising Diesel Costs
         - Wasted Solar Power
         - Equipment Downtime
         - Grid Reliability
    
    3. HOW IT WORKS SECTION
       - 5-step process flow:
         1. Energy Input (Sun icon)
         2. Electrolyzer (Droplets icon)
         3. Safe Storage (Battery icon)
         4. Flexible Output (Truck icon)
         5. Financial Benefit (Wallet icon) - highlighted
    
    4. FEDERAL INCENTIVES SECTION
       - Dark green background
       - "$3.00 per kg" headline
       - 3 benefit cards: Production Credit, Equipment Credit, Fuel Savings
    
    5. TRUST STRIP
       - Certifications marquee (ASME, UL, DOE, NFPA, ISO)
    
    6. FINAL CTA
       - Dark section with "Ready to explore hydrogen?"
       - Phone numbers for Brad and Nick
       - Simple contact form teaser
    
    7. UPDATED FOOTER
       - Clean, simple with links
  </action>
  <verify>npm run build passes, homepage renders correctly</verify>
  <done>New homepage displays all 6 sections with warm aesthetic</done>
</task>

## Success Criteria
- [ ] Hero with badge, headline, CTAs, and image overlay
- [ ] 4-card problem grid
- [ ] 5-step animated process flow
- [ ] Federal incentives section with $3/kg highlight
- [ ] Trust/certifications strip
- [ ] Final CTA with contact info
- [ ] `npm run build` passes
