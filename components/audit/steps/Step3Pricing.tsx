"use client";

import { useAuditStore } from "@/lib/store/useAuditStore";
import { SUPPORTED_TOOLS } from "@/lib/tools";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, TrendingDown } from "lucide-react";

export function Step3Pricing() {
  const { selectedTools, toolDetails, updateToolDetail, nextStep, prevStep } = useAuditStore();

  const tools = SUPPORTED_TOOLS.filter((t) => selectedTools.includes(t.id));

  const isComplete = tools.every((tool) => {
    const detail = toolDetails[tool.id];
    return detail && detail.plan && detail.monthlySpend > 0 && detail.seats > 0;
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Financial details</h2>
        <p className="text-sm text-slate-500">
          Provide current usage and spend for each tool to calculate potential arbitrage.
        </p>
      </div>

      <div className="space-y-6">
        {tools.map((tool) => {
          const detail = toolDetails[tool.id] || { plan: "", monthlySpend: 0, seats: 0 };

          return (
            <div
              key={tool.id}
              className="space-y-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.logo} alt={tool.name} className="h-6 w-6 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{tool.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {tool.category}
                    </p>
                  </div>
                </div>
                {detail.monthlySpend > 0 && detail.seats > 0 && (
                  <div className="hidden text-right sm:block">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Est. Cost/Seat
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      ${(detail.monthlySpend / detail.seats).toFixed(2)}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label
                    htmlFor={`${tool.id}-plan`}
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-500"
                  >
                    Current Plan
                  </Label>
                  <select
                    id={`${tool.id}-plan`}
                    className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/10"
                    value={detail.plan}
                    onChange={(e) => updateToolDetail(tool.id, { plan: e.target.value })}
                  >
                    <option value="">Select plan...</option>
                    {tool.plans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor={`${tool.id}-spend`}
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-500"
                  >
                    Monthly Spend ($)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                      $
                    </span>
                    <Input
                      id={`${tool.id}-spend`}
                      type="number"
                      placeholder="0"
                      className={`h-11 border-slate-200 bg-slate-50/50 pl-7 transition-colors ${
                        detail.monthlySpend === 0 && detail.plan !== ""
                          ? "border-red-300 focus:border-red-400 focus:ring-red-500/10"
                          : ""
                      }`}
                      value={detail.monthlySpend || ""}
                      onChange={(e) =>
                        updateToolDetail(tool.id, { monthlySpend: parseFloat(e.target.value) || 0 })
                      }
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor={`${tool.id}-seats`}
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-500"
                  >
                    Total Seats
                  </Label>
                  <Input
                    id={`${tool.id}-seats`}
                    type="number"
                    placeholder="0"
                    className={`h-11 border-slate-200 bg-slate-50/50 transition-colors ${
                      detail.seats === 0 && detail.plan !== ""
                        ? "border-red-300 focus:border-red-400 focus:ring-red-500/10"
                        : ""
                    }`}
                    value={detail.seats || ""}
                    onChange={(e) =>
                      updateToolDetail(tool.id, { seats: parseInt(e.target.value) || 0 })
                    }
                  />
                </div>
              </div>

              {/* Dynamic Recommendation Teaser */}
              {detail.seats > 0 && detail.monthlySpend > 0 && (
                <div className="border-t border-slate-50 pt-4">
                  <div className="flex items-center gap-2 rounded-lg border border-emerald-100/50 bg-emerald-50/50 px-3 py-2 text-emerald-600">
                    <TrendingDown size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      Arbitrage Opportunity Detected
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between border-t pt-4">
        <Button variant="ghost" onClick={prevStep} className="font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={nextStep} disabled={!isComplete} className="h-11 px-8 font-bold shadow-md">
          Review Audit
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
