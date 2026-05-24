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
    <div className="w-[794px] h-[1123px] bg-white p-20 flex flex-col border-[12px] border-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-12 mb-16">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Executive Intelligence Summary</h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Section 01 / Financial Insights</p>
        </div>
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Sparkles size={18} />
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-16">
        <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col items-center text-center">
            <DollarSign className="text-slate-400 mb-4" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Annual Savings</p>
            <p className="text-4xl font-black text-emerald-600 tracking-tight">${totalSavings.toLocaleString()}</p>
        </div>
        <div className="rounded-3xl border border-primary/10 bg-primary/5 p-8 flex flex-col items-center text-center">
            <Target className="text-primary mb-4" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Efficiency Gain</p>
            <p className="text-4xl font-black text-primary tracking-tight">{efficiencyGain}%</p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-8 flex flex-col items-center text-center">
            <TrendingUp className="text-slate-400 mb-4" size={24} />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Team Size</p>
            <p className="text-4xl font-black text-slate-900 tracking-tight">{teamSize}</p>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="grow space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
             <div className="h-1 w-12 bg-primary rounded-full" />
             <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">AI Financial Context</h3>
          </div>
          <p className="text-xl font-medium leading-[1.7] text-slate-600">
            {summary || "Generating intelligence analysis..."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-12">
           <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Pre-Audit Capital Burn</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Prior to this surgical audit, the engineering organization was operating with unoptimized AI licensing structures, resulting in a baseline spend of <strong>${(totalCurrent * 12).toLocaleString()}/year</strong> across verified tools.
              </p>
           </div>
           <div className="space-y-4">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Post-Optimization Forecast</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                By implementing the plan-tier arbitrage and ghost-seat consolidation strategies outlined in this report, the organization will stabilize spend at <strong>${(totalOptimized * 12).toLocaleString()}/year</strong>.
              </p>
           </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-widest border-t border-slate-50 pt-8">
        <p>CONFIDENTIAL BUSINESS INTELLIGENCE</p>
        <p>PAGE 02</p>
      </div>
    </div>
  );
}
