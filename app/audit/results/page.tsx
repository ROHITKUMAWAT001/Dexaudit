"use client";

import { useState } from "react";
import { useAuditStore } from "@/lib/store/useAuditStore";
import { Navbar } from "@/components/Navbar";
import { ScanningTerminal } from "@/components/audit/results/ScanningTerminal";
import { ResultsHero } from "@/components/audit/results/ResultsHero";
import { ToolAuditCard } from "@/components/audit/results/ToolAuditCard";
import { SavingsCharts } from "@/components/audit/results/SavingsChart";
import { EmailAuditGate } from "@/components/audit/results/EmailAuditGate";
import { runSurgicalAudit } from "@/lib/audit-engine";
import { encodeAuditData } from "@/lib/share";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Share2, Download, Rocket, ArrowRight, Check } from "lucide-react";

export default function ResultsPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const [copied, setCopied] = useState(false);
  const { selectedTools, teamSize, toolDetails } = useAuditStore();

  // Generate results once scanning is done
  const auditResults = runSurgicalAudit(selectedTools, toolDetails, teamSize);

  const totalMonthlyCurrent = auditResults.reduce((acc, r) => acc + r.currentSpend, 0);
  const totalMonthlyOptimized = auditResults.reduce((acc, r) => acc + r.optimizedSpend, 0);
  const totalAnnualSavings = (totalMonthlyCurrent - totalMonthlyOptimized) * 12;

  const handleShare = () => {
    const shareId = encodeAuditData({
      teamSize,
      companyStage: useAuditStore.getState().companyStage,
      results: auditResults,
    });
    const url = `${window.location.origin}/share/${shareId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-24">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isScanning ? (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-12"
            >
              <ScanningTerminal tools={selectedTools} onComplete={() => setIsScanning(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {isLocked && <EmailAuditGate onUnlock={() => setIsLocked(false)} />}
              {/* Header Actions */}
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
                <div>
                  <h1 className="text-3xl font-black tracking-tight text-slate-900">
                    Audit Dashboard
                  </h1>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Surgical report for your engineering AI stack.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="h-11 rounded-xl bg-white font-bold">
                    <Download className="mr-2 h-4 w-4" />
                    PDF Report
                  </Button>
                  <Button
                    onClick={handleShare}
                    className="h-11 min-w-[140px] rounded-xl font-bold shadow-lg shadow-primary/20"
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4 text-emerald-400" />
                        Copied Link
                      </>
                    ) : (
                      <>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Audit
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Hero Section */}
              <ResultsHero
                totalCurrent={totalMonthlyCurrent}
                totalOptimized={totalMonthlyOptimized}
                savings={totalAnnualSavings}
              />

              {/* Visuals Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
                    Spend Visualizations
                  </h2>
                  <div className="h-[1px] flex-1 bg-slate-200" />
                </div>
                <SavingsCharts results={auditResults} />
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
                    Surgical Breakdown
                  </h2>
                  <div className="h-[1px] flex-1 bg-slate-200" />
                </div>
                <div className="grid gap-6">
                  {auditResults.map((result) => (
                    <ToolAuditCard key={result.toolId} result={result} />
                  ))}
                </div>
              </div>

              {/* Lead Capture / Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center text-primary-foreground shadow-2xl"
              >
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-10" />
                <div className="relative z-10 mx-auto max-w-2xl space-y-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Rocket size={24} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter">
                    Ready to unlock these savings?
                  </h2>
                  <p className="text-lg font-medium opacity-80">
                    Our engineering experts can help you implement these optimizations in under 48
                    hours. No disruption, just pure efficiency.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                    <Button
                      size="lg"
                      className="h-14 w-full bg-white px-10 text-lg font-black text-primary shadow-xl hover:bg-slate-50 sm:w-auto"
                    >
                      Book Migration Strategy
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-sm font-bold opacity-60">15-min discovery call</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
