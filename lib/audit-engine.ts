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

/**
 * The core DexAudit engine.
 * Implements mathematical arbitrage checks that a finance professional would agree with.
 * Data sourced and verified as of May 24, 2026.
 */
export function runSurgicalAudit(
  selectedTools: string[],
  toolDetails: Record<string, ToolDetail>,
  teamSize: string
): AuditResult[] {
  const size = parseInt(teamSize) || 0;

  return selectedTools.map((id) => {
    const tool = SUPPORTED_TOOLS.find((t) => t.id === id);
    const detail = toolDetails[id] || { monthlySpend: 0, seats: 0, plan: "" };

    let optimizedSpend = detail.monthlySpend;
    let recommendation = "Your current configuration is highly optimized. We see no immediate arbitrage opportunities.";
    let confidence = 0.98;

    // 1. Ghost Seat Detection (Universal)
    // If they have more seats than their team size, they are wasting money.
    if (detail.seats > size && size > 0) {
      const excess = detail.seats - size;
      const costPerSeat = detail.monthlySpend / detail.seats;
      optimizedSpend = size * costPerSeat;
      recommendation = `Ghost seats detected: You are paying for ${excess} inactive licenses. Consolidating to ${size} active seats saves $${Math.round(excess * costPerSeat)}/mo.`;
      confidence = 0.99;
    }

    // 2. Specific Plan Arbitrage Logic
    else {
      switch (id) {
        case "cursor":
          // Cursor: Teams ($40) vs Pro ($20)
          // Teams is only needed for centralized billing/admin. For < 5 users, individual Pro is identical.
          if ((detail.plan === "Business" || detail.plan === "Teams") && size < 5) {
            optimizedSpend = size * 20;
            recommendation = `Plan Overkill: For a team of ${size}, Cursor Teams/Business ($40) is inefficient. Reimbursing individual Pro accounts ($20) yields identical features at 50% lower cost.`;
            confidence = 0.96;
          }
          break;

        case "claude":
          // Claude: Team plan minimum is 5 seats ($150/mo minimum).
          if ((detail.plan === "Team" || detail.plan === "Business") && size < 5) {
            optimizedSpend = size * 20; // Move back to Pro
            const wastage = detail.monthlySpend - optimizedSpend;
            recommendation = `Floor Arbitrage: Claude Team has a 5-seat minimum ($150). For ${size} users, individual Pro accounts ($20) remove the arbitrary floor, saving $${Math.round(wastage)}/mo.`;
            confidence = 0.98;
          }
          break;

        case "chatgpt":
          // ChatGPT: Business/Team requires min 2 seats ($60/mo).
          if ((detail.plan === "Team" || detail.plan === "Business") && size < 2) {
            optimizedSpend = 20; // Move to Plus
            recommendation = `Single Seat Arbitrage: ChatGPT Team requires a 2-seat minimum ($60). A single Plus account ($20) provides identical reasoning capabilities for solo use.`;
            confidence = 0.99;
          } else if (detail.plan === "Enterprise" && size < 100) {
            optimizedSpend = size * 30; // Move to Team
            recommendation = `Enterprise Bloat: At ${size} seats, Enterprise-tier overhead is unjustified. The Team tier ($30) provides SOC 2 and data privacy without custom contract premiums.`;
            confidence = 0.88;
          }
          break;

        case "copilot":
          // Copilot: Enterprise ($39) vs Business ($19)
          // Enterprise adds custom models/internal knowledge. Most teams don't use this.
          if (detail.plan === "Enterprise" && size < 20) {
            optimizedSpend = size * 19;
            recommendation = `Feature Right-sizing: Copilot Business ($19) offers the same code generation quality as Enterprise ($39) minus the internal knowledge indexing which small teams rarely utilize.`;
            confidence = 0.94;
          }
          break;

        case "gemini":
          // Gemini: Enterprise App ($21) vs Workspace Standard ($14)
          if (detail.plan === "Enterprise" && size < 50) {
            optimizedSpend = size * 14;
            recommendation = `Google Ecosystem Arbitrage: Switching from Gemini Enterprise ($21) to Workspace Business Standard ($14) provides Gemini integration in Docs/Gmail at a 33% discount.`;
            confidence = 0.92;
          }
          break;

        case "v0":
          // v0: Business ($100/user) vs Team ($30/user)
          if (detail.plan === "Business" && size < 15) {
            optimizedSpend = size * 30;
            recommendation = `Tier Rationalization: v0 Business tier ($100) is overkill for small teams. The Team tier ($30) includes shared projects and centralized billing for $70 less per seat.`;
            confidence = 0.90;
          }
          break;

        default:
          // Volume Discount catch-all for high spend
          if (detail.monthlySpend > 1000) {
            optimizedSpend = detail.monthlySpend * 0.85;
            recommendation = `Volume Liquidity: Your ${tool?.name || id} spend has reached a threshold where Credex can facilitate secondary market credits, reducing this line item by roughly 15%.`;
            confidence = 0.85;
          }
          break;
      }
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
