"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { AuditResult } from "@/lib/audit-engine";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateAuditSummary(results: AuditResult[], teamSize: string) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const modelName = "gemini-flash-latest";
    const model = genAI.getGenerativeModel({ model: modelName });

    const systemPrompt = `
      You are an elite Cloud & AI Infrastructure Financial Analyst. Your job is to review a company's AI tool stack audit and provide a concise, hard-hitting, 100-word executive summary. 
      Tone: Professional, surgical, authoritative, B2B. No fluff, no generic greetings. Focus purely on capital efficiency, waste reduction, and strategic consolidation.
    `;

    const userPrompt = `
      Company Context: ${teamSize} engineers.
      Audit Data:
      ${JSON.stringify(results, null, 2)}

      Based on this data, write a ~100-word personalized executive summary paragraph. Highlight the most significant area of waste (e.g., ghost seats, wrong tier, redundant tools) and the total potential savings. Do not use markdown formatting like bolding or bullet points; provide a single, clean paragraph.
    `;

    const result = await model.generateContent([systemPrompt, userPrompt]);
    const response = await result.response;
    const text = response.text();

    return { 
      success: true, 
      summary: text.trim() 
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Generic professional fallback if API fails
    const totalSavings = results.reduce((acc, r) => acc + r.savings, 0) * 12;
    const fallback = `Based on our surgical audit of your AI stack for a team of ${teamSize}, we have identified significant capital efficiency opportunities totaling $${totalSavings.toLocaleString()} in potential annual savings. The primary drivers of waste include plan-tier mismatches and seat over-provisioning across your core tools. Consolidating your infrastructure into managed team environments will maximize your engineering ROI without impacting developer velocity.`;

    return { 
      success: false, 
      summary: fallback 
    };
  }
}
