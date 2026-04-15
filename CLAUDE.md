# Quad Lock Proposal Site

## Client
- **Company:** Quad Lock (globally recognised consumer brand, smartphone mounting solutions)
- **Headcount:** 100+ (90 Melbourne, distributed UK/Europe/China/US)
- **Tech Stack:** Google Workspace, Claude and ChatGPT used across the business
- **Key Contacts:** Andrew Poole (Founder/CEO, brought Justin in via Yotpo, likely in earn-out with Thule), Ben Goss (CMO, internal champion)
- **Named in proposal:** Mark Spencer (CFO, real quote), Peter Bainbridge (COO, real quote), Simon Kuek (CPO), Brea McAdie (Director of People & Capability), Nigel (leadership team member, confirmed real contact)
- **Canonical leadership list for proposal copy:** Andrew, Ben, Mark, Nigel, Peter, Simon, and Brea (never "Sam" — that was a phantom name I had hallucinated earlier)

## Engagement
- **Discovery call:** 30 March 2026
- **Leadership session:** 13 April 2026, 11:00 AM, in-office South Yarra (in the past)
- **Decision date:** Friday 17 April 2026 (canonical — do not reference 13 April as a next step)
- **Start window:** May 2026, subject to availability (messaging on site)
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
- **URL:** https://clients.justinkabbani.com/quad-lock-ai-native-2026-04 (obscured slug, active)
- **Legacy URL:** `/quad-lock` was removed from the northwear proxy and returns 404. Do not reference it.
- **Production alias:** `quad-lock-taupe.vercel.app` (still public, underlying target unchanged)
- **Password:** AINative2026 (was SouthYarra2026)
- **Proxy rewrite config:** `/Users/justin/Claude/clients/northwear/next.config.js` (separate git repo: aiaiguy/workspace). Update this file when changing the public slug. The `index.html` base href script handles both the new slug and `/quad-lock` as a fallback, but the proxy only routes the new slug.
- **Tech:** Static HTML/CSS/JS, single `index.html`, no build tools
- **Dev server:** `npx serve` on port 3848
- **Repo:** github.com/aiaiguy/quad-lock (branch `main`)
- **Vercel project:** quad-lock (justin-kabbanis-projects)
- **Design:** Dark theme, gold accents (matches Justin's proposal brand from Sabo Skirt)

## Nav + TL;DR Modal

The nav has 7 links (Opportunity, Approach, Roadmap, Value, Proof, About, Next) plus a gold **TL;DR** button top-right that opens a one-page modal summary. The modal has 5 blocks: Ambition / Program / Method / Proof / Next Step. The Next Step block references Friday 17 April 2026 decision + May 2026 start. A second TL;DR trigger sits at the end of the exec summary above the signature. Modal closes on Esc, backdrop click, or X button. JS: `openTldr()` / `closeTldr()` at the bottom of the `<script>` block.

## Site Sections (top to bottom)
1. Hero with exec video (`exec-video-compressed.mp4`, `exec-video-poster.png`) + TL;DR button + signature
2. The Situation / what's missing
3. The Approach — "From 1,000 Ideas to 50 Powerful Deliverables" (Interview Bot card)
4. Big numbers: 100+ / 100+ / 6 (people / countries / functions)
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

## CFO One-Pager (offline asset)

`CFO-One-Pager.md` in this directory is a standalone markdown brief designed for Mark Spencer (CFO) to forward to Andrew and/or Thule parent company. Not published on the site. Contains: strategic ambition, investment table, recaptured capacity math ($624K floor), 3-4x ROI benchmark, Phase 0 risk reversal framing ($10K worst-case exposure), 5-metric measurement framework, recommended decision. Export to PDF with Pandoc or Typora when sending.

## Source Materials
- `/Users/justin/Documents/brainiac-vault/200 - Prospects/Quad Lock/` — discovery notes, meeting transcript, analysis, follow-up email draft
- `/Users/justin/Documents/Clients/Quad Lock/` — client-supplied photos
- `/Users/justin/Documents/Clients/Case Studies/` — testimonial videos, case study photos, headshots

## Brand Voice Reminders (for this site)
- Contact email on site: `justin@justinkabbani.com`
- Signature block is centred, 72px tall, "Justin Kabbani" in gold bold below
- No em dashes in body copy (OK in headings, titles, cites, captions)
- Australian English throughout
- **5,000+ professionals trained** (canonical — was 3,000+, updated in this pass)
- **100+ people** at Quad Lock (canonical — not 120)
- Conservative ROI framing: "3-4x ROI is the conservative benchmark, validated across prior engagements"

## Canonical Copy Points
- **Decision date:** Friday 17 April 2026 — use in any "next step" framing
- **Start window:** "Currently holding a May start, subject to availability" — sits above final CTA and in TL;DR next step block
- **Interview Bot method:** Captures 1,000+ ideas, narrowed to ~50 powerful deliverables (not ~150 — that was the old number)
- **Eisenhower matrix:** ~150 ideas prioritised (not ~100)
- **Gem reference:** Always write as "Gem (Gemini workflow)" on first use, never lowercase "gem"
