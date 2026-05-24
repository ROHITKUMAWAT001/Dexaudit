import * as React from "react";
import { AuditResult } from "@/lib/audit-engine";
import { SUPPORTED_TOOLS } from "@/lib/tools";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

interface ReportBreakdownPageProps {
  results: AuditResult[];
  pageNumber: number;
}

export function ReportBreakdownPage({ results, pageNumber }: ReportBreakdownPageProps) {
  return (
    <div className="w-[794px] h-[1123px] bg-white p-20 flex flex-col border-[12px] border-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-12 mb-12">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Surgical Tool Breakdown</h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Section 02 / Per-Tool Arbitrage</p>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="grow space-y-8">
        {results.map((result) => {
          const tool = SUPPORTED_TOOLS.find((t) => t.id === result.toolId);
          const hasSavings = result.savings > 0;

          return (
            <div key={result.toolId} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm relative overflow-hidden">
               {hasSavings && <div className="absolute top-0 left-0 h-full w-1.5 bg-emerald-500" />}
               
               <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                        {tool?.logo ? (
                            <img src={tool.logo} alt="" className="h-7 w-7 grayscale opacity-80" />
                        ) : (
                            <div className="h-7 w-7 bg-slate-200 rounded" />
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-slate-900 leading-tight">{result.toolName}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">{result.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Confidence Score</p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-900 font-bold text-xs">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        {Math.round(result.confidence * 100)}%
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-8 mb-8 border-y border-slate-50 py-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Current Spend</p>
                    <p className="text-xl font-bold text-slate-900">${result.currentSpend.toLocaleString()}<span className="text-xs text-slate-400">/mo</span></p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="text-slate-200" size={20} />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Target Spend</p>
                    <p className="text-xl font-bold text-primary">${result.optimizedSpend.toLocaleString()}<span className="text-xs text-slate-400">/mo</span></p>
                  </div>
               </div>

               <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="shrink-0 mt-1">
                        <AlertCircle size={16} className={hasSavings ? "text-emerald-500" : "text-slate-300"} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-slate-600 italic">
                        &ldquo;{result.recommendation}&rdquo;
                    </p>
                  </div>
                  {hasSavings && (
                    <div className="flex items-center gap-2 mt-4 text-emerald-600 font-black text-[10px] uppercase tracking-wider">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Surgical Savings: ${result.savings.toLocaleString()}/mo Identified
                    </div>
                  )}
               </div>
            </div>
          );
        })}
      </div>

      {/* Page Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-widest border-t border-slate-50 pt-8">
        <p>CONFIDENTIAL BUSINESS INTELLIGENCE</p>
        <p>PAGE {pageNumber.toString().padStart(2, '0')}</p>
      </div>
    </div>
  );
}
