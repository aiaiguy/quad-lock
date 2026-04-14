# Quad Lock Proposal Site

## Client
- **Company:** Quad Lock (globally recognised consumer brand, smartphone mounting solutions)
- **Headcount:** 100+ (90 Melbourne, distributed UK/Europe/China/US)
- **Tech Stack:** Google Workspace, Claude and ChatGPT used across the business
- **Key Contacts:** Andrew Poole (Founder/CEO, brought Justin in via Yotpo, likely in earn-out with Thule), Ben Goss (CMO, internal champion)
- **Named in proposal:** Mark Spencer (CFO, real quote), Peter Bainbridge (COO, real quote), Simon Kuek (CPO), Brea McAdie (Director of People & Capability)

## Engagement
- **Discovery call:** 30 March 2026
- **Leadership session:** 13 April 2026, 11:00 AM, in-office South Yarra
- **Proposal value:** $85,000 + GST (3 months)
- **Phase 0 entry:** $10,000 + GST (weeks 1-2, decision gate)
- **Phase 1:** Full Team Activation, $15,000 + GST, weeks 3-4
- **Phase 2:** Functional Deep Dives, weeks 5-10
- **Phase 3:** Embed & Measure

## Strategic North Star
Become an AI-native business. Lift revenue per head from $2M to $2.5M.

## Key Themes
- AI-native transformation (not just AI adoption)
- Internal self-sufficiency (build capability, not dependency)
- Single source of truth for metrics
- Systematic scaling of existing experimentation
- International rollout readiness (Melbourne first, then global)
- Governance, safety, and access controls

## Site Details
- **URL:** https://clients.justinkabbani.com/quad-lock
- **Production alias:** `quad-lock-taupe.vercel.app`
- **Password:** SouthYarra2026
- **Tech:** Static HTML/CSS/JS, single `index.html`, no build tools
- **Dev server:** `npx serve` on port 3848
- **Repo:** github.com/aiaiguy/quad-lock (branch `main`)
- **Vercel project:** quad-lock (justin-kabbanis-projects)
- **Design:** Dark theme, gold accents (matches Justin's proposal brand from Sabo Skirt)

## Site Sections (top to bottom)
1. Hero with exec video (`exec-video-compressed.mp4`) + signature
2. The Situation / what's missing
3. The Approach — "From 1,000 Ideas to 50 Powerful Deliverables" (Interview Bot card)
4. Big numbers: 150 / 1,000 / 50
5. Gantt chart of phases with hover tooltips
6. Phase 0 → Decision Gate → Phase 1 → Online Learning Portal card → Phase 2 → Phase 3
7. Outcome vision (Every Leader, Every Function, The Organisation), with Mark Spencer and Peter Bainbridge pull quotes
8. Measurement section (full-bleed background `JK-AI-Summit-Ambition-Gap.png`)
9. What's Included (staggered-reveal checklist)
10. Relevant Work — Freedom, Angela Grant video, PepsiCo, Ash Watson video, BE Perth case studies
11. 5 client testimonials (Angela Grant text removed in favour of her video; Abby Joyce, Jodi Murray-Freedman, Cath Weatherley, Adele Creighton remain)
12. About — "Why Justin Kabbani", portrait, stats grid, "Expert across every major AI platform" module, logo wall, `winning.png` hero, final CTA

## Case Study Cards (hero format)

Three expanded case studies use the `.case-study` pattern. All three follow identical structure: logo top-left / gold h3 / Challenge+Approach+Outcome / 3-image or 1-image gallery / 4 metric cards with icons / 6-pillar grid with icons.

- **Freedom Furniture** — Retail & E-commerce AI Activation. Photos: case-freedom-1/2/3. Jason Piggott pullout quote with headshot. Metrics: Hours→Mins, Weeks→Same Day, Every Role, Tracked ROI. Pillars: Adoption & Culture, Productivity & Time, Cost & Efficiency, Higher-Value Work, Scalable IP, Strategic & Board-Level.
- **PepsiCo ANZ** — Cross-Functional AI Productivity. Single photo: case-pepsico-1. Metrics: 1-2hrs→20-30min, 30-50%+ uplift, ~3x ROI, 5 Functions. Pillars: Leadership Clarity, Hours to Minutes, Reusable Workflows, Cross-Functional Use Cases, AI as Infrastructure, Internal Momentum.
- **Business Events Perth** — 40-Person Whole-of-Org AI Activation. Uses `case-beperth-logo.png` (WOAD lockup, not the standard icon). Photos: case-beperth-1/2/3. Metrics: 40 People, 10-20%, Exec+Board, Day One. Pillars: Immediate Adoption, Leadership Alignment, Measurable Targets, Use Cases Across Functions, Confidence Lift, Foundation for Scale.

The Treasury Wine case study was removed and replaced with BE Perth. Treasury Wine logo still appears in the client logo wall as a legit client reference.

## Key Assets

- `images/exec-video-compressed.mp4` — hero video (Justin to camera)
- `images/testimonial-angela-grant.mp4` + `.png` poster — Virgin Australia video testimonial
- `images/testimonial-ash-watson.mp4` + `.png` poster — Carlsberg Group video testimonial
- `images/winning.png` — hero image above final CTA
- `images/online-learning-portal.png` — DNSW Copilot Accelerator screenshot (used for portal card)
- `images/AI-Masterclass.png` — measurement section image
- `images/JK-AI-Summit-Ambition-Gap.png` — full-bleed background for measurement
- `images/group-session.png`, `team-workshop.png` — phase section images
- `images/Mark-Spencer.png`, `Peter-Bainbridge.png`, `Simon-Kuek.png`, `Brea-McAdie.png` — Quad Lock team headshots for pullout quotes
- `images/testimonial-jason-piggott.jpeg` — Freedom quote headshot
- `images/logos/` — 70+ client logos
- `images/ai-logos/` — 7 platform logos (chatgpt, claude, copilot, gemini, grok, perplexity, openclaw)
- `images/exec-video.mp4` — 135MB uncompressed source, git-ignored and `.vercelignore`d

## Deployment

- `.vercelignore` contains `.vercel` and `images/exec-video.mp4` to keep upload under 100MB
- Push to GitHub auto-deploys via Vercel git integration BUT deployments built from pre-commit snapshots if triggered before the commit. Always verify with curl or manually `npx vercel --prod --yes`.
- Deploy sequence: `git add -A && git commit -m "..." && git push && npx vercel --prod --yes`

## Source Materials
- `/Users/justin/Documents/brainiac-vault/200 - Prospects/Quad Lock/` — discovery notes, meeting transcript, analysis, follow-up email draft
- `/Users/justin/Documents/Clients/Quad Lock/` — client-supplied photos
- `/Users/justin/Documents/Clients/Case Studies/` — testimonial videos, case study photos, headshots

## Brand Voice Reminders (for this site)
- Contact email on site: `justin@justinkabbani.com`
- Signature block is centred, 72px tall, "Justin Kabbani" in gold bold below
- No em dashes anywhere in copy
- Australian English throughout
