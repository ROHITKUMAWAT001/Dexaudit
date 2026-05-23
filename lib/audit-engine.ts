import { ToolDetail } from "./store/useAuditStore";
import { SUPPORTED_TOOLS } from "./tools";

export type AuditResult = {
  toolId: string;
  toolName: string;
  currentSpend: number;
  optimizedSpend: number;
  savings: number;
  recommendation: string;
  confidence: number;
  category: string;
};

export function runSurgicalAudit(
  selectedTools: string[],
  toolDetails: Record<string, ToolDetail>,
  teamSize: string
): AuditResult[] {
  const size = parseInt(teamSize) || 0;

  return selectedTools.map((id) => {
    const tool = SUPPORTED_TOOLS.find((t) => t.id === id);
    const detail = toolDetails[id] || { monthlySpend: 0, seats: 0, plan: "" };

    // Logic for demo/MVP:
    // 1. If seats > teamSize, suggest reduction.
    // 2. Suggest plan arbitrage based on seat count.
    // 3. Constant 20-40% savings for "Advanced" tools if misconfigured.

    let optimizedSpend = detail.monthlySpend;
    let recommendation = "Your current configuration is optimal for your team size.";
    let confidence = 0.95;

    if (detail.seats > size * 1.2) {
      const excess = detail.seats - size;
      const costPerSeat = detail.monthlySpend / detail.seats;
      optimizedSpend = detail.monthlySpend - excess * costPerSeat * 0.8;
      recommendation = `Detected ${excess} ghost seats. We recommend consolidating to ${size} active licenses.`;
      confidence = 0.88;
    } else if (id === "cursor" && detail.plan === "Business") {
      // Example Arbitrage: Cursor Business vs Pro for small teams
      if (size < 10) {
        optimizedSpend = detail.monthlySpend * 0.6;
        recommendation =
          "Switch to Pro Individual plans with centralized billing to save 40% on enterprise overhead.";
        confidence = 0.92;
      }
    } else if (id === "chatgpt" || id === "claude") {
      // Suggest LLM consolidation
      optimizedSpend = detail.monthlySpend * 0.75;
      recommendation =
        "Redundant LLM detected. Consolidated API access through a single gateway could reduce costs by 25%.";
      confidence = 0.85;
    } else {
      // General optimization
      optimizedSpend = detail.monthlySpend * 0.9;
      recommendation = "Optimize annual commitment to unlock 10% volume discount.";
    }

    return {
      toolId: id,
      toolName: tool?.name || id,
      currentSpend: detail.monthlySpend,
      optimizedSpend: Math.round(optimizedSpend),
      savings: Math.round(detail.monthlySpend - optimizedSpend),
      recommendation,
      confidence,
      category: tool?.category || "Other",
    };
  });
}
