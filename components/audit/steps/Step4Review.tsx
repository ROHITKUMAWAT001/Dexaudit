"use client"

import { useAuditStore } from "@/lib/store/useAuditStore"
import { SUPPORTED_TOOLS } from "@/lib/tools"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Rocket, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function Step4Review() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { teamSize, companyStage, selectedTools, toolDetails, prevStep, setStep } = useAuditStore()

  const tools = SUPPORTED_TOOLS.filter((t) => selectedTools.includes(t.id))
  const totalSpend = Object.values(toolDetails).reduce((acc, curr) => acc + (curr.monthlySpend || 0), 0)
  
  // Logic: Estimate ~30% savings for teaser
  const estimatedSavings = Math.round(totalSpend * 0.3)

  const handleStartAudit = () => {
    setIsSubmitting(true)
    // Simulate audit generation
    setTimeout(() => {
      router.push("/audit/results")
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Final Review</h2>
        <p className="text-slate-500 text-sm">Verify your input before we run the deep-scan engine.</p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 space-y-4 relative group">
          <button 
            onClick={() => setStep(1)}
            className="absolute right-6 top-6 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Edit
          </button>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company Context</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Team Size</div>
              <div className="font-bold text-slate-900 text-lg">{teamSize} Engineers</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Stage</div>
              <div className="font-bold text-slate-900 text-lg capitalize">{companyStage}</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 space-y-4 shadow-sm relative group">
          <button 
            onClick={() => setStep(2)}
            className="absolute right-6 top-6 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Edit Tools
          </button>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Stack Summary</h3>
          <div className="space-y-3">
            {tools.map((tool) => (
              <div key={tool.id} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-900">{tool.name}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {toolDetails[tool.id]?.plan}
                  </span>
                </div>
                <div className="text-sm font-black text-slate-700">
                  ${toolDetails[tool.id]?.monthlySpend}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 flex justify-between items-center border-t border-slate-100">
            <span className="text-sm font-bold text-slate-900">Total Monthly Spend</span>
            <span className="text-xl font-black text-slate-900">${totalSpend}</span>
          </div>
        </div>

        {/* Savings Teaser Card */}
        <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg shadow-primary/20 overflow-hidden relative">
           <div className="absolute -right-4 -top-4 opacity-10 rotate-12">
              <Rocket size={120} />
           </div>
           <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                 <CheckCircle2 size={16} className="text-primary-foreground/80" />
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Initial Estimate</span>
              </div>
              <h4 className="text-lg font-bold mb-1">Potential Annual Savings</h4>
              <div className="text-4xl font-black tracking-tighter">
                ${(estimatedSavings * 12).toLocaleString()}
              </div>
              <p className="text-xs mt-3 opacity-70 leading-relaxed max-w-[80%]">
                Based on your stack and team size, we've detected significant arbitrage opportunities in seat-sharing and redundant plan tiers.
              </p>
           </div>
        </div>
      </div>

      <div className="flex justify-between pt-4 border-t">
        <Button variant="ghost" onClick={prevStep} disabled={isSubmitting} className="font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleStartAudit} className="h-12 px-8 font-black shadow-xl" disabled={isSubmitting}>
          {isSubmitting ? "Recalibrating Stack..." : "Run Deep Scan Audit"}
          {!isSubmitting && <Rocket className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
