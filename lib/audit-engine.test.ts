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

  // Test 2: Cursor Plan Mismatch
  it("should recommend downgrading Cursor Business to Pro for small teams", () => {
    const selectedTools = ["cursor"];
    const toolDetails: Record<string, ToolDetail> = {
      cursor: { plan: "Business", monthlySpend: 160, seats: 4 },
    };
    const teamSize = "4";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const cursorResult = results[0];

    // 4 devs on Business ($40/ea) = $160.
    // Downgrade to Pro ($20/ea) = $80.
    expect(cursorResult.optimizedSpend).toBe(80);
    expect(cursorResult.savings).toBe(80);
    expect(cursorResult.recommendation).toContain("Plan Overkill");
  });

  // Test 3: Specific Plan Arbitrage (No ghost seats)
  it("should catch Claude floor arbitrage when seats match team size but plan is overkill", () => {
    const selectedTools = ["claude"];
    const toolDetails: Record<string, ToolDetail> = {
      // 2 seats for 2 devs, but paying $150 minimum (manual override case)
      claude: { plan: "Team", monthlySpend: 150, seats: 2 },
    };
    const teamSize = "2";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const claudeResult = results[0];

    // Individual Pro is 2 * $20 = $40.
    expect(claudeResult.optimizedSpend).toBe(40);
    expect(claudeResult.savings).toBe(110);
    expect(claudeResult.recommendation).toContain("Floor Arbitrage");
  });

  // Test 4: Copilot Feature Right-sizing
  it("should recommend Copilot Business over Enterprise for moderate teams", () => {
    const selectedTools = ["github-copilot"];
    const toolDetails: Record<string, ToolDetail> = {
      "github-copilot": { plan: "Enterprise", monthlySpend: 390, seats: 10 },
    };
    const teamSize = "10";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const copilotResult = results[0];

    // 10 devs on Enterprise ($39/ea) = $390.
    // Downgrade to Business ($19/ea) = $190.
    expect(copilotResult.optimizedSpend).toBe(190);
    expect(copilotResult.savings).toBe(200);
    expect(copilotResult.recommendation).toContain("Feature Right-sizing");
  });

  // Test 5: Volume Discount Catch-all
  it("should apply 15% volume discount for high-spend unoptimized tools", () => {
    const selectedTools = ["chatgpt"];
    const toolDetails: Record<string, ToolDetail> = {
      chatgpt: { plan: "Enterprise", monthlySpend: 2000, seats: 100 },
    };
    const teamSize = "100";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const chatgptResult = results[0];

    // 2000 * 0.85 = 1700.
    expect(chatgptResult.optimizedSpend).toBe(1700);
    expect(chatgptResult.savings).toBe(300);
    expect(chatgptResult.recommendation).toContain("Volume Liquidity");
  });

  // Test 6: Zero Spend Handling
  it("should handle zero spend gracefully without crashing", () => {
    const selectedTools = ["gemini"];
    const toolDetails: Record<string, ToolDetail> = {
      gemini: { plan: "Free", monthlySpend: 0, seats: 0 },
    };
    const teamSize = "10";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const geminiResult = results[0];

    expect(geminiResult.optimizedSpend).toBe(0);
    expect(geminiResult.savings).toBe(0);
    expect(geminiResult.recommendation).toContain("highly optimized");
  });

  // Test 7: Failsafe Bounds
  it("should never recommend an optimized spend higher than current spend", () => {
    const selectedTools = ["v0"];
    const toolDetails: Record<string, ToolDetail> = {
      v0: { plan: "Premium", monthlySpend: 20, seats: 1 },
    };
    const teamSize = "1";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const v0Result = results[0];

    expect(v0Result.optimizedSpend).toBeLessThanOrEqual(v0Result.currentSpend);
    expect(v0Result.savings).toBeGreaterThanOrEqual(0);
  });

  // Test 8: Fully Optimized Stack
  it("should return 0 savings for a perfectly optimized configuration", () => {
    const selectedTools = ["cursor"];
    const toolDetails: Record<string, ToolDetail> = {
      cursor: { plan: "Pro", monthlySpend: 20, seats: 1 },
    };
    const teamSize = "1";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const cursorResult = results[0];

    expect(cursorResult.savings).toBe(0);
    expect(cursorResult.optimizedSpend).toBe(20);
  });

  // Test 9: ChatGPT Solo User Arbitrage (No ghost seats)
  it("should recommend Plus over Team for solo ChatGPT users when seats match size", () => {
    const selectedTools = ["chatgpt"];
    const toolDetails: Record<string, ToolDetail> = {
      // 1 user on Team (manual override case where they pay $60 minimum for 1 seat)
      chatgpt: { plan: "Team", monthlySpend: 60, seats: 1 },
    };
    const teamSize = "1";

    const results = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const chatgptResult = results[0];

    // Downgrade to Plus = $20.
    expect(chatgptResult.optimizedSpend).toBe(20);
    expect(chatgptResult.savings).toBe(40);
    expect(chatgptResult.recommendation).toContain("Single Seat Arbitrage");
  });
});
