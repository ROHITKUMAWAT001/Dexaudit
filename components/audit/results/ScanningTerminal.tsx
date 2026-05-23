"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, ShieldCheck, Activity, Search, Database, Cpu } from "lucide-react"

interface ScanningTerminalProps {
  onComplete: () => void
  tools: string[]
}

const LOG_MESSAGES = [
  "Initializing DexAudit Deep-Scan Engine...",
  "Establishing secure connection to AI providers...",
  "Verifying company context benchmarks...",
  "Analyzing engineering seat-leakage patterns...",
  "Identifying ghost licenses in IDE stack...",
  "Scanning API usage for redundant tiering...",
  "Running ROI recalibration algorithms...",
  "Compiling surgical spend report...",
  "Finalizing optimization recommendations..."
]

export function ScanningTerminal({ onComplete, tools }: ScanningTerminalProps) {
  const [logs, setLogs] = useState<string[]>([])
  const [currentIndex, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentIndex < LOG_MESSAGES.length) {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, `> ${LOG_MESSAGES[currentIndex]}`])
        setCurrentStep(prev => prev + 1)
        setProgress((prev) => Math.min(prev + (100 / LOG_MESSAGES.length), 100))
      }, 600 + Math.random() * 800)
      return () => clearTimeout(timeout)
    } else {
      setTimeout(onComplete, 1000)
    }
  }, [currentIndex, onComplete])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-12 text-center space-y-4">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.2)]"
        >
          <Activity className="text-primary h-10 w-10" />
        </motion.div>
        <h1 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">
          Scanning AI Stack
        </h1>
        <p className="text-slate-500 font-medium max-w-md mx-auto">
          DexAudit is currently performing a surgical scan of your {tools.length} selected tools to detect arbitrage opportunities.
        </p>
      </div>

      <div className="rounded-2xl bg-[#0D1117] border border-slate-800 shadow-2xl overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-slate-800">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-2 ml-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <Terminal size={12} />
            audit-engine-v1.0.4
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={scrollRef}
          className="h-[320px] p-6 overflow-y-auto text-xs sm:text-sm leading-relaxed"
        >
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "mb-2",
                  i === logs.length - 1 ? "text-primary font-bold" : "text-slate-400"
                )}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
          {currentIndex < LOG_MESSAGES.length && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-primary ml-1 translate-y-1"
            />
          )}
        </div>

        {/* Progress Bar */}
        <div className="p-4 bg-[#161B22] border-t border-slate-800">
           <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Progress</span>
              <span className="text-[10px] font-bold text-primary">{Math.round(progress)}%</span>
           </div>
           <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
           </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {[
          { icon: ShieldCheck, label: "Secure Scan" },
          { icon: Search, label: "Deep Analysis" },
          { icon: Database, label: "Benchmarking" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
            <item.icon className="h-5 w-5 text-slate-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
