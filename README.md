# DexAudit — AI Spend Intelligence

## What is this?
DexAudit is a surgical financial calculator designed for Series A to Series C engineering leaders (CTOs, VPs). It analyzes a startup's current AI tooling stack (Cursor, Claude, Copilot, etc.) against official vendor pricing minimums to instantly detect ghost seats, tier mismatches, and recoverable capital waste.

## Deployed Application
**Live URL:** [https://dexaudit.vercel.app](https://dexaudit.vercel.app) *(Update this once deployed)*

## Visual Walkthrough
*(Replace these with actual links to screenshots or a Loom video before submission)*
- [Screenshot 1: The Landing Page Funnel]
- [Screenshot 2: The Audit Input Engine]
- [Screenshot 3: The Boardroom-Grade PDF Export]
- [Video: 30-Second End-to-End Walkthrough](https://loom.com/...)

## Quick Start
To run this project locally, you will need a Supabase project, a Stripe account, a Resend API key, and a Google Gemini API key.

```bash
# 1. Install dependencies
npm install

# 2. Configure Environment Variables
cp .env.example .env.local
# (Fill in your SUPABASE_URL, SUPABASE_ANON_KEY, STRIPE_SECRET_KEY, RESEND_API_KEY, GEMINI_API_KEY)

# 3. Run the development server
npm run dev
```

To deploy, simply push this repository to Vercel and add the environment variables in the Vercel dashboard.

## Strategic Decisions (Trade-offs)

1. **Client-Side Math vs. Server-Side Processing:** I chose to execute the core mathematical arbitrage engine entirely on the client side rather than hitting an API endpoint. **Why:** It provides a zero-latency, "instant" feeling for the user, maximizing engagement before the email gate, while saving server costs. The trade-off is exposing the calculation logic in the bundle.
2. **Post-Value Email Gate vs. Upfront Signup:** I decided to keep the core audit tool completely free and un-gated, asking for the email only *after* the total savings number is revealed. **Why:** It dramatically reduces Top-of-Funnel friction. The trade-off is lower absolute lead volume, but much higher intent/quality.
3. **html2canvas PDF Assembly vs. Native PDF Libraries:** I used a custom multi-stage DOM capture strategy instead of `@react-pdf/renderer`. **Why:** It allowed me to perfectly recycle the existing Tailwind CSS designs (including complex SVG gradients) for a premium look without having to rewrite the entire UI in primitive PDF components, sacrificing slight rendering speed for massive aesthetic gains.
4. **Supabase vs. Custom Postgres + Prisma:** I opted for Supabase Server Actions. **Why:** Setting up Prisma with a raw database for a simple `leads` table and Auth is overkill for a 7-day MVP. Supabase provided instant RLS security and out-of-the-box Auth APIs, sacrificing deep schema customization for extreme velocity.
5. **Gemini 1.5 Flash vs. GPT-4o:** I selected Gemini Flash for the personalized AI summary generation. **Why:** The task requires parsing structured JSON into a 100-word paragraph. GPT-4o is too expensive and slow for this. Gemini Flash provides sub-second latency, which is crucial for not blocking the UI during the "Unlock Report" loading state.
