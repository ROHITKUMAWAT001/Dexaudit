# DEVLOG.md

## Day 1 — 2026-05-22

**Hours worked:** 4
**What I did:**

- Initialized Next.js 15 project in `dexaudit/` subdirectory.
- Configured stable Tailwind CSS v3 and shadcn/ui base.
- Established "Clean & Crisp" B2B design tokens.
- Implemented Landing Page (Phase 2) including Hero, Social Proof, Features, and FAQ.
- Configured rich SEO metadata and Open Graph previews.
  **What I learned:**
- Next.js 15 and Tailwind v4 PostCSS compatibility nuances in Windows environments.
- Efficiency of "Just-In-Time" component building for MVP speed.
  **Blockers / what I'm stuck on:**
- Initially struggled with Tailwind v4 PostCSS errors, resolved by downgrading to stable v3 for reliability.
  **Plan for tomorrow:**
- Finalize Phase 1 UI polish (Success/Error states, Toasts).
- Begin Phase 2: Core Backend Engine & AI Integration.

## Day 2 — 2026-05-23

**Hours worked:** 6
**What I did:**

- Fixed mobile modal unmount flickering by refactoring menu logic to use event-driven closing.
- Re-themed Booking Modal and Audit engine to strictly follow primary brand guidelines (Primary Blue).
- Implemented animated Navbar underlines for active and hover states.
- Refactored landing page sections into dedicated, reusable `/features` and `/pricing` pages.
- Implemented professional Global Skeleton Loading (using a new UI component and loading.tsx).
- Enhanced Audit Flow with real-time visual input validation.
- Initialized and synced the dexaudit application with full commit history to GitHub via Git subtree.
  **What I learned:**
- Managing multi-repo synchronization using Git subtree without losing history.
- Next.js 15 automatic loading states for improving perceived performance.
  **Blockers / what I'm stuck on:**
- None. Successfully navigated the mobile unmount race condition.
  **Plan for tomorrow:**
- Complete Phase 2: Supabase database setup and Server Actions for lead capture.
- Replace remaining browser alerts with professional success UI components.

## Day 3 — 2026-05-24

**Hours worked:** 8
**What I did:**

- Integrated Supabase with real server-side clients and persistent session management.
- Implemented global lead capture engine saving data to public.leads table.
- Integrated Resend for high-fidelity transactional emails (Audit Confirmations).
- Replaced all legacy alert() calls with professional sonner toast notifications.
- Refactored Audit Engine logic to use real-world 2026 pricing data and defensible financial math.
- Resolved critical production-grade bugs: ReferenceErrors, integer parsing, and LLM 404s.
- Integrated Google Gemini 1.5 Flash for personalized surgical summaries.
  **What I learned:**
- Handling server-side vs browser-side Supabase client initialization in Next.js 15.
- The psychology of 'defensible logic' in B2B fintech tools.
  **Blockers / what I'm stuck on:**
- Transient Gemini API model ID changes (fixed by switching to latest flash endpoints).
  **Plan for tomorrow:**
- Build advanced enterprise export engine (PDF) and Stripe payments.

## Day 4 — 2026-05-25

**Hours worked:** 7
**What I did:**

- Architected and built a multi-page Boardroom-Grade PDF Assembly Engine using off-screen components.
- Implemented full Stripe Checkout flow with dynamic pricing and success/cancel routing.
- Developed High-Savings intelligent routing via a premium Calendly popup modal.
- Executed a comprehensive mobile responsiveness overhaul (Dashboard, Charts, and AI components).
- Upgraded visual identity with real AI tool SVG logos and premium chart gradients.
- Implemented a full Email/Password Signup and Login system using Supabase Auth.
- Connected all landing page CTAs to a smart routing funnel (detects current user progress).
  **What I learned:**
- Component-based PDF generation techniques vs simple full-page screenshots.
- Designing high-conversion funnels for B2B SaaS users.
  **Blockers / what I'm stuck on:**
- None. Successfully resolved sub-pixel layout gaps in the modal assembly.
  **Plan for tomorrow:**
- Complete mandatory entrepreneurial documentation (GTM, Economics, Reflection).
- Implement Vitest automated testing suite for the audit engine.
