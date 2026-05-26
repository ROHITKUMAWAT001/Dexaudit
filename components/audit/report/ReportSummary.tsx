import * as React from "react";
import { Sparkles, TrendingUp, DollarSign, Target } from "lucide-react";

interface ReportSummaryProps {
  summary: string;
  totalCurrent: number;
  totalOptimized: number;
  totalSavings: number;
  teamSize: string;
}

export function ReportSummary({
  summary,
  totalCurrent,
  totalOptimized,
  totalSavings,
  teamSize,
}: ReportSummaryProps) {
  const efficiencyGain = Math.round(((totalCurrent - totalOptimized) / totalCurrent) * 100);

  return (
    <div className="flex h-[1123px] w-[794px] flex-col border-[12px] border-slate-50 bg-white p-20">
      {/* Header */}
      <div className="mb-16 flex items-center justify-between border-b border-slate-100 pb-12">
        <div className="space-y-1">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Executive Intelligence Summary
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Section 01 / Financial Insights
          </p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Sparkles size={18} />
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="mb-16 grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50/50 p-8 text-center">
          <DollarSign className="mb-4 text-slate-400" size={24} />
          <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Annual Savings
          </p>
          <p className="text-4xl font-black tracking-tight text-emerald-600">
            ${totalSavings.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col items-center rounded-3xl border border-primary/10 bg-primary/5 p-8 text-center">
          <Target className="mb-4 text-primary" size={24} />
          <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-primary">
            Efficiency Gain
          </p>
          <p className="text-4xl font-black tracking-tight text-primary">{efficiencyGain}%</p>
        </div>
        <div className="flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50/50 p-8 text-center">
          <TrendingUp className="mb-4 text-slate-400" size={24} />
          <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
            Team Size
          </p>
          <p className="text-4xl font-black tracking-tight text-slate-900">{teamSize}</p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="grow space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 rounded-full bg-primary" />
            <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">
              AI Financial Context
            </h3>
          </div>
          <p className="text-xl font-medium leading-[1.7] text-slate-600">
            {summary || "Generating intelligence analysis..."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-12">
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Pre-Audit Capital Burn
            </h4>
            <p className="text-sm leading-relaxed text-slate-500">
              Prior to this surgical audit, the engineering organization was operating with
              unoptimized AI licensing structures, resulting in a baseline spend of{" "}
              <strong>${(totalCurrent * 12).toLocaleString()}/year</strong> across verified tools.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Post-Optimization Forecast
            </h4>
            <p className="text-sm leading-relaxed text-slate-500">
              By implementing the plan-tier arbitrage and ghost-seat consolidation strategies
              outlined in this report, the organization will stabilize spend at{" "}
              <strong>${(totalOptimized * 12).toLocaleString()}/year</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between border-t border-slate-50 pt-8 text-[10px] font-bold tracking-widest text-slate-400">
        <p>CONFIDENTIAL BUSINESS INTELLIGENCE</p>
        <p>PAGE 02</p>
      </div>
    </div>
  );
}
