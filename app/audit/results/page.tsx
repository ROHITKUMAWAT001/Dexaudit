"use client";

import { useState, useEffect } from "react";
import { useAuditStore } from "@/lib/store/useAuditStore";
import { Navbar } from "@/components/Navbar";
import { ScanningTerminal } from "@/components/audit/results/ScanningTerminal";
import { ResultsHero } from "@/components/audit/results/ResultsHero";
import { ToolAuditCard } from "@/components/audit/results/ToolAuditCard";
import { SavingsCharts } from "@/components/audit/results/SavingsChart";
import { EmailAuditGate } from "@/components/audit/results/EmailAuditGate";
import { HighSavingsModal } from "@/components/audit/results/HighSavingsModal";
import { BookingModal } from "@/components/BookingModal";
import { ReportCover } from "@/components/audit/report/ReportCover";
import { ReportSummary } from "@/components/audit/report/ReportSummary";
import { ReportCharts } from "@/components/audit/report/ReportCharts";
import { ReportBreakdownPage } from "@/components/audit/report/ReportBreakdownPage";
import { ReportMethodology } from "@/components/audit/report/ReportMethodology";
import { runSurgicalAudit } from "@/lib/audit-engine";
import { encodeAuditData } from "@/lib/share";
import { generateAuditSummary } from "@/lib/actions/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Share2,
  Download,
  Rocket,
  ArrowRight,
  Check,
  Twitter,
  Linkedin,
  Sparkles,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as React from "react";

export default function ResultsPage() {
  const [isScanning, setIsScanning] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const [copied, setCopied] = useState(false);
  const [aiLoading, setAiLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [aiSummary, setAiSummary] = useState("");
  const [showHighSavingsModal, setShowHighSavingsModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const { selectedTools, teamSize, toolDetails } = useAuditStore();

  // Generate results once scanning is done
  const auditResults = runSurgicalAudit(selectedTools, toolDetails, teamSize);

  const totalMonthlyCurrent = auditResults.reduce((acc, r) => acc + r.currentSpend, 0);
  const totalMonthlyOptimized = auditResults.reduce((acc, r) => acc + r.optimizedSpend, 0);
  const totalAnnualSavings = (totalMonthlyCurrent - totalMonthlyOptimized) * 12;

  // Real AI Summary generation
  useEffect(() => {
    async function fetchSummary() {
      if (!isScanning && !isLocked && aiSummary === "") {
        const result = await generateAuditSummary(auditResults, teamSize);
        setAiSummary(result.summary);
        setAiLoading(false);

        // Auto-show high savings modal if conditions met
        if (totalAnnualSavings > 500 && !hasShownModal) {
          setShowHighSavingsModal(true);
          setHasShownModal(true);
        }
      }
    }
    fetchSummary();
  }, [isScanning, isLocked, auditResults, teamSize, aiSummary, totalAnnualSavings, hasShownModal]);

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

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    toast.info("Assembling professional boardroom report...");

    try {
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // IDs of components to capture
      const componentIds = ["report-cover", "report-summary", "report-charts"];

      // Calculate breakdown pages (3 tools per page)
      const toolsPerPage = 3;
      const breakdownPageCount = Math.ceil(auditResults.length / toolsPerPage);

      for (let i = 0; i < breakdownPageCount; i++) {
        componentIds.push(`report-breakdown-${i}`);
      }

      componentIds.push("report-methodology");

      for (let i = 0; i < componentIds.length; i++) {
        const id = componentIds[i];
        const element = document.getElementById(id);

        if (!element) continue;

        const canvas = await html2canvas(element, {
          scale: 3, // Ultra-crisp quality
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          width: 794,
          height: 1123,
        });

        const imgData = canvas.toDataURL("image/png", 1.0);

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
      }

      pdf.save(`DexAudit-Boardroom-Report-${new Date().getTime()}.pdf`);
      toast.success("Professional report generated successfully!");
    } catch (error) {
      console.error("Boardroom PDF Error:", error);
      toast.error("Failed to assemble report. Rendering issue.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Helper to chunk results for multi-page breakdown
  const resultChunks = Array.from({ length: Math.ceil(auditResults.length / 3) }, (v, i) =>
    auditResults.slice(i * 3, i * 3 + 3)
  );

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-24">
      <Navbar />

      {/* HIDDEN REPORT ENGINE - OFF SCREEN */}
      <div className="pointer-events-none fixed -left-[9999px] top-0 select-none overflow-hidden opacity-0">
        <div id="report-cover">
          <ReportCover
            auditId="DX-4402-991"
            timestamp={new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          />
        </div>
        <div id="report-summary">
          <ReportSummary
            summary={aiSummary}
            totalCurrent={totalMonthlyCurrent}
            totalOptimized={totalMonthlyOptimized}
            totalSavings={totalAnnualSavings}
            teamSize={teamSize}
          />
        </div>
        <div id="report-charts">
          <ReportCharts results={auditResults} />
        </div>
        {resultChunks.map((chunk, index) => (
          <div key={index} id={`report-breakdown-${index}`}>
            <ReportBreakdownPage results={chunk} pageNumber={index + 4} />
          </div>
        ))}
        <div id="report-methodology">
          <ReportMethodology />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
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

              <HighSavingsModal
                isOpen={showHighSavingsModal}
                onOpenChange={setShowHighSavingsModal}
                savings={totalAnnualSavings}
              />

              {/* Header Actions */}
              <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                    Audit Dashboard
                  </h1>
                  <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                    Surgical report for your engineering AI stack.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl bg-white px-3 text-xs font-bold hover:bg-slate-50 sm:h-11 sm:px-4 sm:text-sm"
                    onClick={handleDownloadPDF}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <Loader2 className="mr-2 h-3 w-3 animate-spin sm:h-4 sm:w-4" />
                    ) : (
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                    PDF Report
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl bg-white px-3 text-xs font-bold hover:bg-slate-50 sm:h-11 sm:px-4 sm:text-sm"
                  >
                    <Twitter className="mr-2 h-3 w-3 text-[#1DA1F2] sm:h-4 sm:w-4" />X
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl bg-white px-3 text-xs font-bold hover:bg-slate-50 sm:h-11 sm:px-4 sm:text-sm"
                  >
                    <Linkedin className="mr-2 h-3 w-3 text-[#0A66C2] sm:h-4 sm:w-4" />
                    Post
                  </Button>
                  <Button
                    onClick={handleShare}
                    className="h-10 min-w-[100px] rounded-xl px-3 text-xs font-bold shadow-lg shadow-primary/20 sm:h-11 sm:min-w-[140px] sm:px-5 sm:text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-3 w-3 text-emerald-400 sm:h-4 sm:w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Share2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Copy Link
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* PDF EXPORT AREA: FROM AI SUMMARY TO LAST BREAKDOWN */}
              <div className="-m-1 space-y-8 rounded-[2rem] bg-white/40 p-1 sm:space-y-12 sm:rounded-[3rem]">
                {/* AI Summary Section */}
                <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
                  <div className="mb-4 flex items-center gap-3 sm:mb-6">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-8 sm:w-8">
                      <Sparkles size={16} className="sm:w-[18px]" />
                    </div>
                    <h2 className="text-base font-black tracking-tight text-slate-900 sm:text-lg">
                      AI-Generated Intelligence Summary
                    </h2>
                  </div>

                  {aiLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-3 w-full sm:h-4" />
                      <Skeleton className="h-3 w-[92%] sm:h-4" />
                      <Skeleton className="h-3 w-[95%] sm:h-4" />
                      <Skeleton className="mt-2 h-3 w-[40%] sm:mt-4 sm:h-4" />
                    </div>
                  ) : (
                    <div className="relative">
                      <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                        {aiSummary}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary sm:mt-6 sm:text-[10px]">
                        <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-primary sm:h-2 sm:w-2" />
                        Analysis complete via Google Gemini Flash Latest
                      </div>
                    </div>
                  )}
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
                  <div className="grid gap-6 pb-4">
                    {auditResults.map((result) => (
                      <ToolAuditCard key={result.toolId} result={result} />
                    ))}
                  </div>
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
                    <BookingModal>
                      <Button
                        size="lg"
                        className="h-14 w-full bg-white px-10 text-lg font-black text-primary shadow-xl hover:bg-slate-50 sm:w-auto"
                      >
                        Book Migration Strategy
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </BookingModal>
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
