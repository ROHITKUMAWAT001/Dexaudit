"use client"

import { useParams } from "next/navigation"
import { decodeAuditData } from "@/lib/share"
import { Navbar } from "@/components/Navbar"
import { ResultsHero } from "@/components/audit/results/ResultsHero"
import { ToolAuditCard } from "@/components/audit/results/ToolAuditCard"
import { SavingsCharts } from "@/components/audit/results/SavingsChart"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, ShieldCheck, Globe } from "lucide-react"
import Link from "next/link"

export default function PublicSharePage() {
  const params = useParams()
  const shareData = params.id as string
  
  const data = decodeAuditData(shareData)

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
           <h1 className="text-2xl font-bold text-slate-900">Invalid or Expired Link</h1>
           <p className="text-slate-500">This audit report could not be loaded.</p>
           <Button asChild>
              <Link href="/">Return Home</Link>
           </Button>
        </div>
      </div>
    )
  }

  const { teamSize, companyStage, results } = data
  const totalMonthlyCurrent = results.reduce((acc, r) => acc + r.currentSpend, 0)
  const totalMonthlyOptimized = results.reduce((acc, r) => acc + r.optimizedSpend, 0)
  const totalAnnualSavings = (totalMonthlyCurrent - totalMonthlyOptimized) * 12

  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-20">
      <Navbar />
      
      {/* Public Share Banner */}
      <div className="bg-primary/5 border-y border-primary/10 py-3 mb-12">
         <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary">
               <Globe size={14} className="animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest">Public Shared Report</span>
            </div>
            <Link href="/audit/new" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-1">
               Run your own audit <ArrowRight size={12} />
            </Link>
         </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-8">
            <div className="space-y-1">
               <div className="flex items-center gap-2 text-slate-400">
                  <BarChart3 size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Anonymous Report</span>
               </div>
               <h1 className="text-3xl font-black tracking-tight text-slate-900">
                  Engineering Stack Audit
               </h1>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
               <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company Type</div>
                  <div className="text-xs font-black text-slate-900 capitalize">{companyStage} Scale-up</div>
               </div>
               <div className="h-8 w-[1px] bg-slate-100" />
               <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Team Size</div>
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
                <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase">Spend Analysis</h2>
                <div className="h-[1px] flex-1 bg-slate-200" />
             </div>
             <SavingsCharts results={results} />
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-6">
             <div className="flex items-center gap-4">
                <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase">Tool Optimization</h2>
                <div className="h-[1px] flex-1 bg-slate-200" />
             </div>
             <div className="grid gap-6">
                {results.map((result) => (
                  <ToolAuditCard key={result.toolId} result={result} />
                ))}
             </div>
          </div>

          {/* Viral CTA */}
          <div className="rounded-3xl bg-slate-900 p-12 text-center text-white relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
                   <ShieldCheck size={24} className="text-primary" />
                </div>
                <h2 className="text-4xl font-black tracking-tighter italic">Save $10k+ on your AI stack today.</h2>
                <p className="text-lg opacity-60 font-medium leading-relaxed">
                   Join 500+ engineering teams who have used DexAudit to identify seat-leakage and optimize their AI toolchain.
                </p>
                <div className="pt-4">
                   <Button asChild size="lg" className="h-14 px-10 text-lg font-black shadow-xl shadow-primary/20">
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
  )
}
