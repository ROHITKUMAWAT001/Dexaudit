"use client";

import { motion } from "framer-motion";
import { ArrowRight, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { AuditResult } from "@/lib/audit-engine";
import { SUPPORTED_TOOLS } from "@/lib/tools";

export function ToolAuditCard({ result }: { result: AuditResult }) {
  const tool = SUPPORTED_TOOLS.find((t) => t.id === result.toolId);
  const hasSavings = result.savings > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tool?.logo} alt={result.toolName} className="h-8 w-8 object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">{result.toolName}</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {result.category}
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between sm:justify-end gap-3 sm:gap-6 rounded-2xl border border-slate-100 bg-slate-50 px-4 sm:px-6 py-3">
          <div className="text-center">
            <div className="mb-0.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Current
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 line-through">
              ${result.currentSpend}
            </div>
          </div>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-slate-300" />
          <div className="text-center">
            <div className="mb-0.5 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-primary">
              Optimized
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900">${result.optimizedSpend}</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <Info className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
            <p className="text-sm font-medium leading-relaxed text-slate-600">
              {result.recommendation}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {hasSavings ? (
            <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-700">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Savings Potential
                </span>
              </div>
              <div className="text-xl font-black">${result.savings}/mo</div>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Fully Optimized
                </span>
              </div>
              <div className="text-xl font-black">$0</div>
            </div>
          )}

          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Confidence Score
            </span>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${result.confidence * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-900">
                {Math.round(result.confidence * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
