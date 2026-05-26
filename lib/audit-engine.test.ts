import { describe, it, expect } from "vitest";
import { runSurgicalAudit } from "./audit-engine";
import { ToolDetail } from "./store/useAuditStore";

describe("DexAudit Mathematical Engine", () => {
  // Test 1: Ghost Seat Detection
  it("should detect ghost seats when seats exceed team size", () => {
    const selectedTools = ["cursor"];
    const toolDetails: Record<string, ToolDetail> = {
      cursor: { plan: "Pro", monthlySpend: 100, seats: 5 },
    };
    const teamSize = "2";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const cursorResult = results[0];

    // 5 seats for 2 devs = 3 ghost seats. 
    // Cost per seat = 100/5 = 20.
    // Optimized spend = 2 * 20 = 40.
    expect(cursorResult.optimizedSpend).toBe(40);
    expect(cursorResult.savings).toBe(60);
    expect(cursorResult.recommendation).toContain("Ghost seats detected");
  });
});
