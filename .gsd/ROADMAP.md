# Rockwell H2 Website Roadmap

**Current Milestone:** v6.0 Content Blueprint ✅ COMPLETE  
**Current Phase:** All phases implementedd

## Milestone Goal
Complete website rebuild with warm, approachable aesthetic, multi-page structure, working ROI calculator, and A+++++ conversion optimization. Transform from "Industrial Premium" to "Sales Machine" that converts visitors into leads.

## Must-Haves
- [ ] **New Design System** — Green/Orange/Blue palette, Sora + Plus Jakarta Sans typography
- [ ] **Multi-Page Structure** — Home, Products, Applications, Incentives, About, Contact
- [ ] **Working ROI Calculator** — Interactive sliders with real-time math and effects
- [ ] **Hero with Real Assets** — Use existing images (HydrogenTanks, LindeForklift)
- [ ] **5-Step Process Flow** — Animated "How It Works" section
- [ ] **Federal Incentives Section** — $3/kg hook with qualification details
- [ ] **Use Cases** — Forklifts, Farm Equipment, Backup Power
- [ ] **About Section** — Brad & Nick profiles with credentials
- [ ] **Contact Form** — Working form with validation
- [ ] **Mobile-First Responsive** — Touch-optimized, click-to-call

## Nice-to-Haves
- [ ] Live System Dashboard Widget
- [ ] Multi-Step ROI Assessment with PDF generation
- [ ] Installation Map (US map with deployment dots)
- [ ] Video Embeds (testimonials, walkthroughs)
- [ ] Exit-Intent Popup (lead magnet)
- [ ] Hydrogen 101 Explainer (interactive)
- [ ] Comparison Table (H2 vs Diesel vs Battery)
- [ ] Blog/Resources Section
- [ ] Live Chat Widget placeholder
- [ ] Calendly Integration

---

## Phases

### Phase 1: Foundation & Design System
**Status**: ✅ Complete
**Objective**: Establish new visual identity and base components.
**Requirements**:
- [x] Update `globals.css` with new color tokens (Hydrogen Blue, Agricultural Green, Energy Gold, Steel Gray)
- [x] Add new typography (Sora for headings, Plus Jakarta Sans for body, IBM Plex Mono for data)
- [x] Create base animation utilities (fadeInUp, blob, shimmer)
- [x] Update layout.tsx with new fonts
- [x] Remove old Industrial Premium styling

---

### Phase 2: Homepage Build
**Status**: ✅ Complete
**Objective**: Build the new homepage with all core sections.
**Requirements**:
- [x] **Hero Section** — Badge, headline, CTAs, image with stats overlay
- [x] **Problem Section** — 4 pain points grid (diesel costs, wasted solar, downtime, grid)
- [x] **How It Works** — 5-step animated process flow
- [x] **Incentives Preview** — Big $3/kg hook with 3 benefit cards
- [x] **Use Cases** — Forklifts, Farm Equipment, Backup Power
- [x] **Certifications Strip** — Trust signals
- [x] **Final CTA** — Contact form with phone numbers

---

### Phase 3: ROI Calculator
**Status**: ✅ Complete
**Objective**: Build interactive calculator with real math and visual effects.
**Requirements**:
- [x] Dual-slider inputs (diesel spend, fleet size)
- [x] Real-time calculation logic (fuel savings + tax credits)
- [x] Animated number counter effect
- [x] Results card with breakdown
- [x] "Get Full Analysis" CTA integration

---

### Phase 4: Products Page
**Status**: ✅ Complete
**Objective**: Showcase the PowerPod systems and modules.
**Requirements**:
- [x] Product hero with key value prop
- [x] PowerPod Series grid (PowerPack, PowerBank, PowerOnDemand, Fueling Module)
- [x] Technical specs tables
- [x] "How They Work Together" system diagram
- [x] Product CTA section

---

### Phase 5: Applications Page
**Status**: ✅ Complete
**Objective**: Showcase use cases with compelling visuals.
**Requirements**:
- [x] **Hydrogen Forklifts** — Refuel in 3 mins, no battery room
- [x] **Farm Equipment** — Eliminate diesel, on-site fueling
- [x] **Backup Power** — Protect cold storage, months of capacity
- [x] Image cards with benefit bullet points
- [x] Comparison table (Hydrogen vs Battery vs Diesel)

---

### Phase 6: Incentives Page
**Status**: ✅ Complete
**Objective**: Deep dive on federal tax benefits and qualification.
**Requirements**:
- [x] IRA Section 45V breakdown ($3/kg production credit)
- [x] Investment Tax Credit (30%) explanation
- [x] LCFS Credits (California) section
- [x] Qualification checklist with checkmarks
- [x] "What You'll Earn" example calculation
- [x] CTA to contact for custom analysis

---

### Phase 7: About & Contact Pages
**Status**: ✅ Complete
**Objective**: Build trust with team profiles and working contact form.
**Requirements**:
- [x] **About Page**: Company story, "Engineers Not Salespeople"
- [x] **Team Section**: Brad & Nick with real credentials and phone numbers
- [x] **Contact Page**: Dark hero, dual phone numbers, simple form
- [x] Form validation (name, email, application type)
- [x] Form submission handling (client-side with success state)

---

### Phase 8: Polish & A+++++ Features
**Status**: ⬜ Not Started
**Objective**: Add animations, micro-interactions, and conversion features.
**Requirements**:
- [ ] Page load stagger animations
- [ ] Scroll-triggered section reveals
- [ ] Stat counter animations (count up on view)
- [ ] Hover states for cards and buttons
- [ ] Sticky mobile call button
- [ ] Trust signals strip (certifications)
- [ ] Accessibility audit (WCAG AA minimum)

---

### Phase 9: Verification & Deployment
**Status**: ✅ Complete
**Objective**: Final QA and push to production.
**Requirements**:
- [x] Production build test (`npm run build`)
- [x] All 11 pages compiled successfully
- [x] Git commit and push to production
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge) - manual
- [ ] Mobile responsiveness audit (iPhone, Android) - manual
- [ ] Performance check (LCP < 2.5s, CLS < 0.1) - manual

---

## Milestone v5.0: Content Engineering

### Phase 10: Solutions Page Refinement
**Status**: ⬜ Not Started
**Objective**: "Hydrogen Solutions for Real Operations"
**Requirements**:
- [ ] Hero: "Real Operations" narrative
- [ ] 3 Solution Blocks (Logistics, Ag, Backup) with Operational Impact Cards
- [ ] Comparison Table: Operational downtime risk
- [ ] CTA: "Model Your ROI"

### Phase 11: Platform Page Refinement
**Status**: ⬜ Not Started
**Objective**: "Complete PowerPod Platform"
**Requirements**:
- [ ] Modules Grid: 4 core modules
- [ ] Flow Diagram: Systems diagram style
- [ ] Technical Specs: Output, Pressure, Interfaces
- [ ] CTA: "Size a system for your site"

### Phase 12: Technology Page Refinement
**Status**: ⬜ Not Started
**Objective**: Deep technical reference
**Requirements**:
- [ ] Platform Snapshot: Deployment time, Safety
- [ ] System Map: "PowerPod Core" center
- [ ] Deep Specs Table
- [ ] CTA: "Request engineering drawings"

### Phase 13: Incentives Page Refinement
**Status**: ⬜ Not Started
**Objective**: "Financial Engineering"
**Requirements**:
- [ ] ROI Snapshot: Payback, 45V, ITC, Uptime
- [ ] Financial Model Panel: Diesel vs H2 cost
- [ ] Example Scenario: 200kg/day system
- [ ] CTA: "Request ROI calculator"

### Phase 14: Industries Page Overhaul
**Status**: ⬜ Not Started
**Objective**: Tabbed interface for specific verticals
**Requirements**:
- [ ] Tabs: Logistics, Ag, Infra, Ports
- [ ] Content per tab: Key metric, Outcome, Bullets, Brief CTA

### Phase 15: About Page Refinement
**Status**: ⬜ Not Started
**Objective**: "Engineers, Not Salespeople"
**Requirements**:
- [ ] Differentiators: 30 years, Turnkey
- [ ] Team Cards: Technical focus
- [ ] Compliance Section

### Phase 16: Contact Page Refinement
**Status**: ⬜ Not Started
**Objective**: "Let's design your system"
**Requirements**:
- [ ] Intake Snapshot Card
- [ ] Full Engineering Intake Form (H2 demand, Power avail)
- [ ] Process Steps (3)
- [ ] FAQ (No sales pressure)

---

## Previous Milestones (Archived)

### v3.1 Content Deepening (Completed)
- Phase 10: Visual Superiority (Industrial Premium)
- Phase 11: Content Deepening & Distinct Identities
- Solutions, About, and Homepage enhancements

### v3.0 Industrial Premium Polish (Completed)
- Motion & Micro-Interactions
- Breaking the Grid layouts
- Technical Brutalism aesthetic
- Texture & Materiality

### v2.0 Glade Redesign (Completed)
- Premium "Glade-like" aesthetic, Framer Motion, refined UI

### v1.0 Launch (Completed)
- Foundation, Platform, Solutions, Company pages
