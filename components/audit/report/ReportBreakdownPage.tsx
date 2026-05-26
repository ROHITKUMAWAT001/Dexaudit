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
    <div className="flex h-[1123px] w-[794px] flex-col border-[12px] border-slate-50 bg-white p-20">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between border-b border-slate-100 pb-12">
        <div className="space-y-1">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Surgical Tool Breakdown
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Section 02 / Per-Tool Arbitrage
          </p>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="grow space-y-8">
        {results.map((result) => {
          const tool = SUPPORTED_TOOLS.find((t) => t.id === result.toolId);
          const hasSavings = result.savings > 0;

          return (
            <div
              key={result.toolId}
              className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              {hasSavings && <div className="absolute left-0 top-0 h-full w-1.5 bg-emerald-500" />}

              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                    {tool?.logo ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={tool.logo} alt="" className="h-7 w-7 opacity-80 grayscale" />
                    ) : (
                      <div className="h-7 w-7 rounded bg-slate-200" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-black leading-tight text-slate-900">
                      {result.toolName}
                    </h3>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {result.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Confidence Score
                  </p>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-900">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    {Math.round(result.confidence * 100)}%
                  </div>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-3 gap-8 border-y border-slate-50 py-6">
                <div>
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Current Spend
                  </p>
                  <p className="text-xl font-bold text-slate-900">
                    ${result.currentSpend.toLocaleString()}
                    <span className="text-xs text-slate-400">/mo</span>
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="text-slate-200" size={20} />
                </div>
                <div className="text-right">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-primary">
                    Target Spend
                  </p>
                  <p className="text-xl font-bold text-primary">
                    ${result.optimizedSpend.toLocaleString()}
                    <span className="text-xs text-slate-400">/mo</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="mt-1 shrink-0">
                    <AlertCircle
                      size={16}
                      className={hasSavings ? "text-emerald-500" : "text-slate-300"}
                    />
                  </div>
                  <p className="text-sm font-medium italic leading-relaxed text-slate-600">
                    &ldquo;{result.recommendation}&rdquo;
                  </p>
                </div>
                {hasSavings && (
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-emerald-600">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Surgical Savings: ${result.savings.toLocaleString()}/mo Identified
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between border-t border-slate-50 pt-8 text-[10px] font-bold tracking-widest text-slate-400">
        <p>CONFIDENTIAL BUSINESS INTELLIGENCE</p>
        <p>PAGE {pageNumber.toString().padStart(2, "0")}</p>
      </div>
    </div>
  );
}
