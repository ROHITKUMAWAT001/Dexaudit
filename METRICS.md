# 📈 Analytics & Metrics Instrumentation

<div align="center">
  <img src="https://img.shields.io/badge/Strategy-Data_Driven-emerald?style=for-the-badge" alt="Strategy"/>
  <img src="https://img.shields.io/badge/Focus-B2B_Conversion-blue?style=for-the-badge" alt="Focus"/>
</div>

---

## 1. The North Star Metric

**North Star Metric: "High-Intent Audits Completed" (HIAC)**

**Definition:** The number of unique audits generated where the identified savings exceed $500/month _and_ the user successfully un-gates the report by providing a verified work email.

**Why this metric?**
For a B2B lead-gen tool, measuring Daily Active Users (DAU) or Page Views is a vanity exercise. A thousand students playing with the calculator provide zero business value to Credex.
The HIAC metric perfectly aligns user value (they found massive savings) with business value (Credex acquired a qualified lead with purchasing power). If HIAC goes up, Credex's secondary market revenue goes up.

---

## 2. The 3 Input Metrics (Drivers)

To influence the North Star, we must instrument and optimize three specific leading indicators:

### A. Audit Completion Rate (%)

- **Definition:** (Users who click "Run Surgical Audit" / Users who land on the page).
- **Why it matters:** Measures the effectiveness of our Hero copy and the perceived low-friction of the input form. If this drops, our top-of-funnel is bleeding.

### B. Gate Conversion Rate (%)

- **Definition:** (Users who submit their email / Users who see the "Unlock Report" modal).
- **Why it matters:** This tests the "Sunk Cost & Curiosity" hypothesis. It tells us if the initial "$X Saved" preview is compelling enough to trade contact information for.

### C. Viral Share Coefficient (K-Factor)

- **Definition:** Average number of new HIACs generated directly from a shared PDF link or URL.
- **Why it matters:** B2B tooling scales best via internal team sharing (CTO sends to CEO). A K-factor > 1 means the tool grows organically without paid acquisition.

---

## 3. Immediate Instrumentation Priorities

Before launching on Hacker News, the following events must be instrumented (via PostHog or Vercel Web Analytics):

1. **Event: `page_view`** (Baseline).
2. **Event: `audit_started`** (Triggers when the first tool is selected).
3. **Event: `audit_completed`** (Includes payload: `total_savings_value`).
4. **Event: `email_gate_presented`**.
5. **Event: `lead_captured`** (Fires to Supabase and Analytics).

---

## 4. The Pivot Threshold (When to kill the feature)

**The Rule:** We will monitor the **Gate Conversion Rate** for the first 500 completed audits.

**The Pivot Trigger:** If the Gate Conversion Rate drops below **5%** (meaning 95% of users see the savings but refuse to give their email to see the details), the current hypothesis is invalidated.

**The Pivot Action:** We will immediately remove the email gate, make the entire report 100% free and open, and instead rely entirely on the "Book Migration Strategy" CTA embedded _within_ the final report to generate leads. We trade volume of leads for extreme high-intent leads.
