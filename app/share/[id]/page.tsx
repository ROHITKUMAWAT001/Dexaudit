"use client";

import { useParams } from "next/navigation";
import { decodeAuditData } from "@/lib/share";
import { Navbar } from "@/components/Navbar";
import { ResultsHero } from "@/components/audit/results/ResultsHero";
import { ToolAuditCard } from "@/components/audit/results/ToolAuditCard";
import { SavingsCharts } from "@/components/audit/results/SavingsChart";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function PublicSharePage() {
  const params = useParams();
  const shareData = params.id as string;

  const data = decodeAuditData(shareData);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Invalid or Expired Link</h1>
          <p className="text-slate-500">This audit report could not be loaded.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const { teamSize, companyStage, results } = data;
  const totalMonthlyCurrent = results.reduce((acc, r) => acc + r.currentSpend, 0);
  const totalMonthlyOptimized = results.reduce((acc, r) => acc + r.optimizedSpend, 0);
  const totalAnnualSavings = (totalMonthlyCurrent - totalMonthlyOptimized) * 12;

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-24">
      <Navbar />

      {/* Public Share Banner */}
      <div className="mb-12 border-y border-primary/10 bg-primary/5 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2 text-primary">
            <Globe size={14} className="animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Public Shared Report
            </span>
          </div>
          <Link
            href="/audit/new"
            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
          >
            Run your own audit <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <BarChart3 size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Anonymous Report
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                Engineering Stack Audit
              </h1>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Company Type
                </div>
                <div className="text-xs font-black capitalize text-slate-900">
                  {companyStage} Scale-up
                </div>
              </div>
              <div className="h-8 w-[1px] bg-slate-100" />
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Team Size
                </div>
                <div className="text-xs font-black text-slate-900">{teamSize} Engineers</div>
              </div>
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
                Spend Analysis
              </h2>
              <div className="h-[1px] flex-1 bg-slate-200" />
            </div>
            <SavingsCharts results={results} />
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-black uppercase tracking-tight text-slate-900">
                Tool Optimization
              </h2>
              <div className="h-[1px] flex-1 bg-slate-200" />
            </div>
            <div className="grid gap-6">
              {results.map((result) => (
                <ToolAuditCard key={result.toolId} result={result} />
              ))}
            </div>
          </div>

          {/* Viral CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-12 text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 backdrop-blur-sm">
                <ShieldCheck size={24} className="text-primary" />
              </div>
              <h2 className="text-4xl font-black italic tracking-tighter">
                Save $10k+ on your AI stack today.
              </h2>
              <p className="text-lg font-medium leading-relaxed opacity-60">
                Join 500+ engineering teams who have used DexAudit to identify seat-leakage and
                optimize their AI toolchain.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-10 text-lg font-black shadow-xl shadow-primary/20"
                >
                  <Link href="/audit/new">
                    Run Your Free Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
