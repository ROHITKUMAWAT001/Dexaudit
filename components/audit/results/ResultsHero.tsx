"use client";

import { motion } from "framer-motion";
import { Percent, Zap, ShieldCheck } from "lucide-react";

interface ResultsHeroProps {
  totalCurrent: number;
  totalOptimized: number;
  savings: number;
}

export function ResultsHero({ totalCurrent, totalOptimized, savings }: ResultsHeroProps) {
  const savingsPercent = Math.round((savings / totalCurrent) * 100) || 0;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* Primary Savings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-2xl md:col-span-2"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/20 to-transparent opacity-50" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Surgical Scan Verified
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter">Your AI Spend Optimized.</h1>
          </div>

          <div className="mt-8 flex items-baseline gap-4">
            <div className="text-7xl font-black tracking-tighter text-white">
              ${savings.toLocaleString()}
            </div>
            <div className="text-xl font-bold text-slate-400">/ YEAR SAVED</div>
          </div>

          <div className="mt-8 flex gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Current Spend
              </div>
              <div className="text-xl font-bold text-slate-300">
                ${(totalCurrent * 12).toLocaleString()}
              </div>
            </div>
            <div className="mt-2 h-10 w-[1px] bg-white/10" />
            <div>
              <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Optimized Spend
              </div>
              <div className="text-xl font-bold text-primary">
                ${(totalOptimized * 12).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Column */}
      <div className="grid gap-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Percent size={20} />
            </div>
            <div className="text-[10px] font-black uppercase leading-none tracking-widest text-slate-400">
              Efficiency Gain
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900">{savingsPercent}%</div>
          <p className="mt-2 text-xs font-medium text-slate-500">
            Potential ROI increase across your AI stack.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Zap size={20} />
            </div>
            <div className="text-[10px] font-black uppercase leading-none tracking-widest text-slate-400">
              Leakage Score
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900">High</div>
          <p className="mt-2 text-xs font-medium text-slate-500">
            Critical redundancies found in LLM license allocation.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
