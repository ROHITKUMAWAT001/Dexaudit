# AI Prompts (PROMPTS.md)

This document outlines the LLM prompts used within DexAudit and the reasoning behind their design.

## 1. Personalized Audit Summary Prompt

**Model Used:** Google Gemini 1.5 Flash (via Google Generative AI SDK)

**System Prompt / Context:**
```text
You are an elite Cloud & AI Infrastructure Financial Analyst. Your job is to review a company's AI tool stack audit and provide a concise, hard-hitting, 100-word executive summary. 

Tone: Professional, surgical, authoritative, B2B. No fluff, no generic greetings. Focus purely on capital efficiency, waste reduction, and strategic consolidation.
```

**User Prompt:**
```text
Company Context: {teamSize} engineers.
Audit Data:
{JSON_STRING_OF_AUDIT_RESULTS}

Based on this data, write a ~100-word personalized executive summary paragraph. Highlight the most significant area of waste (e.g., ghost seats, wrong tier, redundant tools) and the total potential savings. Do not use markdown formatting like bolding or bullet points; provide a single, clean paragraph.
```

### Why this was written this way:
1.  **Role Prompting:** Defining the persona as an "elite Cloud & AI Infrastructure Financial Analyst" forces the model to adopt a specific, authoritative tone suitable for a B2B SaaS tool targeting founders and CTOs.
2.  **Length Constraint:** Explicitly requesting "~100-word" and "single, clean paragraph" ensures the output fits neatly into the UI without breaking the layout or requiring scrollbars.
3.  **Formatting Constraint:** "Do not use markdown formatting" prevents the model from generating lists or bold text, which would conflict with the designed typography of the Summary Card on the results page.
4.  **Data Driven:** Passing the exact calculated `teamSize` and the JSON string of `auditResults` (which already contains the defensible mathematical reasoning) ensures the AI doesn't hallucinate numbers, but merely synthesizes the hard data into a readable executive summary.

### What didn't work (Iterations):
- *Attempt 1:* Just sending the tool names. The AI hallucinated savings numbers that didn't match our defensible audit engine. Fix: Pass the calculated results array.
- *Attempt 2:* Allowing markdown. The AI returned bulleted lists that looked terrible inside the specific summary card UI component. Fix: Explicitly banned markdown.
- *Attempt 3:* Using a generic system prompt. The tone felt too conversational ("Hi there! Here is your audit..."). Fix: Enforced the "surgical, B2B" tone rule.
