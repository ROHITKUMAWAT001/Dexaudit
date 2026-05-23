"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Activity, Search, Database } from "lucide-react";

interface ScanningTerminalProps {
  onComplete: () => void;
  tools: string[];
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
  "Finalizing optimization recommendations...",
];

export function ScanningTerminal({ onComplete, tools }: ScanningTerminalProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < LOG_MESSAGES.length) {
      const timeout = setTimeout(
        () => {
          setLogs((prev) => [...prev, `> ${LOG_MESSAGES[currentIndex]}`]);
          setCurrentStep((prev) => prev + 1);
          setProgress((prev) => Math.min(prev + 100 / LOG_MESSAGES.length, 100));
        },
        600 + Math.random() * 800
      );
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onComplete, 1000);
    }
  }, [currentIndex, onComplete]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-12 space-y-4 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/10 shadow-[0_0_40px_rgba(var(--primary),0.2)]"
        >
          <Activity className="h-10 w-10 text-primary" />
        </motion.div>
        <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900">
          Scanning AI Stack
        </h1>
        <p className="mx-auto max-w-md font-medium text-slate-500">
          DexAudit is currently performing a surgical scan of your {tools.length} selected tools to
          detect arbitrage opportunities.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0D1117] font-mono shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-slate-800 bg-[#161B22] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="ml-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Terminal size={12} />
            audit-engine-v1.0.4
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={scrollRef}
          className="h-[320px] overflow-y-auto p-6 text-xs leading-relaxed sm:text-sm"
        >
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "mb-2",
                  i === logs.length - 1 ? "font-bold text-primary" : "text-slate-400"
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
              className="ml-1 inline-block h-4 w-2 translate-y-1 bg-primary"
            />
          )}
        </div>

        {/* Progress Bar */}
        <div className="border-t border-slate-800 bg-[#161B22] p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Progress
            </span>
            <span className="text-[10px] font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
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
          { icon: Database, label: "Benchmarking" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <item.icon className="h-5 w-5 text-slate-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
