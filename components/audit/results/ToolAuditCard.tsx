"use client"

import { motion } from "framer-motion"
import { ArrowRight, Info, AlertTriangle, CheckCircle2, Code2, Bot, Sparkles, Cpu, Terminal, Layout } from "lucide-react"
import { AuditResult } from "@/lib/audit-engine"
import { cn } from "@/lib/utils"

const LOGO_MAP: Record<string, any> = {
  cursor: Code2,
  claude: Bot,
  chatgpt: Sparkles,
  gemini: Cpu,
  "github-copilot": Terminal,
  v0: Layout
}

export function ToolAuditCard({ result }: { result: AuditResult }) {
  const Icon = LOGO_MAP[result.toolId] || Sparkles
  const hasSavings = result.savings > 0

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-primary shadow-sm">
            <Icon size={28} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">{result.toolName}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{result.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100">
           <div className="text-center">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Current</div>
              <div className="text-sm font-bold text-slate-500 line-through">${result.currentSpend}</div>
           </div>
           <ArrowRight className="text-slate-300 h-4 w-4" />
           <div className="text-center">
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">Optimized</div>
              <div className="text-lg font-black text-slate-900">${result.optimizedSpend}</div>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 h-full">
            <Info className="h-4 w-4 text-slate-400 mt-1 shrink-0" />
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {result.recommendation}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {hasSavings ? (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700">
               <div className="flex items-center gap-2">
                  <AlertTriangle size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Savings Potential</span>
               </div>
               <div className="text-xl font-black">${result.savings}/mo</div>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400">
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Fully Optimized</span>
               </div>
               <div className="text-xl font-black">$0</div>
            </div>
          )}

          <div className="flex items-center justify-between px-4 py-2">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidence Score</span>
             <div className="flex items-center gap-2">
                <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-primary" style={{ width: `${result.confidence * 100}%` }} />
                </div>
                <span className="text-[10px] font-bold text-slate-900">{Math.round(result.confidence * 100)}%</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
