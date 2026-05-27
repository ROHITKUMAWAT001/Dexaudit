# TESTS.md

## DexAudit Testing Strategy

This document outlines the testing strategy, framework configuration, and core test cases implemented for the DexAudit MVP, primarily focusing on the mathematical defensibility of the `audit-engine.ts`.

### Framework & Configuration

We selected **Vitest** for our unit testing framework because:
1.  **Speed & Native TypeScript Support:** It works seamlessly with our Next.js 15 + TypeScript stack without the heavy configuration overhead of Jest.
2.  **Logic-Focused:** Since our primary risk vector is incorrect financial math in the audit engine, we needed a fast, isolated runner that tests pure functions (headless) rather than a full browser environment.

**Key Commands:**
*   Run tests: `npm run test`
*   Run tests in watch mode: `npm run test:watch`

---

## Core Test Suites (`lib/audit-engine.test.ts`)

The test suite is built to validate the "Finance-Defensible" business logic. We must guarantee that our savings calculations are accurate, handle edge cases, and never output mathematically impossible results.

### 1. Ghost Seat Detection
**Scenario:** A company is paying for more seats than they have developers.
**Validation:** The engine must accurately detect the disparity between `seats` and `teamSize`, calculate the per-seat cost, and recommend shedding the unused licenses.
*Status: Passing*

### 2. Plan Mismatch / Overkill
**Scenario:** A small team is paying for an Enterprise or Business tier when a Pro tier provides the same core value for their size.
**Validation:** The engine must recognize the team size threshold (e.g., Cursor Business for 4 devs) and recommend downgrading to the appropriate tier (e.g., Cursor Pro), calculating the delta.
*Status: Passing*

### 3. Floor Arbitrage (Minimum Seat Requirements)
**Scenario:** Tools like Claude Team or ChatGPT Team require a minimum number of seats (e.g., minimum 2 seats = $60/mo) even if you only have 1 developer.
**Validation:** The engine must detect when a solo user or very small team is trapped by a minimum seat floor and recommend downgrading to individual Pro plans.
*Status: Passing*

### 4. Feature Right-Sizing
**Scenario:** A team is using GitHub Copilot Enterprise ($39/mo) but their size/maturity only warrants Copilot Business ($19/mo).
**Validation:** The engine recommends the step-down tier, specifically validating the $20/seat delta.
*Status: Passing*

### 5. Volume Discount / Credex Arbitrage
**Scenario:** A large enterprise team is spending massive amounts on retail API or enterprise tiers (e.g., $2000/mo on ChatGPT Enterprise).
**Validation:** When specific tier downgrades or ghost seats aren't applicable, the engine applies the baseline Credex Volume Liquidity discount (15%) as the fallback optimization.
*Status: Passing*

### 6. Zero Spend Handling
**Scenario:** A user submits a tool but enters $0 for their monthly spend (e.g., using a free tier).
**Validation:** The engine must not crash, divide by zero, or return NaN. It must output $0 optimized spend, $0 savings, and gracefully label the stack as "highly optimized."
*Status: Passing*

### 7. Failsafe Bounds
**Scenario:** Edge case inputs or conflicting data.
**Validation:** Mathematical hard-stop: The `optimizedSpend` must **never** be greater than the `currentSpend`, and `savings` must **never** be negative.
*Status: Passing*

### 8. Fully Optimized Stack
**Scenario:** A solo developer paying $20/mo for exactly 1 seat of Cursor Pro.
**Validation:** The engine must recognize perfection, returning exactly $0 in savings and maintaining the $20 optimized spend.
*Status: Passing*

---

## Future Testing Roadmap (Post-MVP)

While the mathematical core is covered, future phases will introduce:
1.  **Component Testing:** React Testing Library for the multi-step form to ensure persistence logic (localStorage) works correctly.
2.  **E2E Testing:** Playwright or Cypress to validate the entire flow: Input -> Audit -> Email Capture -> Share URL generation.
3.  **API Mocking:** MSW (Mock Service Worker) to test the Anthropic LLM summary generation fallbacks when the API is down or times out.
