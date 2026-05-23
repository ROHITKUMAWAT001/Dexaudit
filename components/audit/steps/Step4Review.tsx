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
  const { teamSize, companyStage, selectedTools, toolDetails, prevStep } = useAuditStore()

  const tools = SUPPORTED_TOOLS.filter((t) => selectedTools.includes(t.id))
  const totalSpend = Object.values(toolDetails).reduce((acc, curr) => acc + (curr.monthlySpend || 0), 0)

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
        <h2 className="text-2xl font-bold tracking-tight">Final Review</h2>
        <p className="text-muted-foreground text-sm">Verify your input before we run the deep-scan engine.</p>
      </div>

      <div className="grid gap-6">
        <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Company Context</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Team Size</div>
              <div className="font-bold text-slate-900">{teamSize} Engineers</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Stage</div>
              <div className="font-bold text-slate-900 capitalize">{companyStage}</div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-6 space-y-4 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Stack Summary</h3>
          <div className="space-y-3">
            {tools.map((tool) => (
              <div key={tool.id} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="font-bold text-slate-900">{tool.name}</span>
                </div>
                <div className="text-sm font-medium text-slate-600">
                  ${toolDetails[tool.id]?.monthlySpend}/mo
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2 flex justify-between items-center">
            <span className="text-sm font-bold text-slate-900">Estimated Monthly Spend</span>
            <span className="text-lg font-black text-primary">${totalSpend}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={prevStep} disabled={isSubmitting}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleStartAudit} className="h-12 px-8" disabled={isSubmitting}>
          {isSubmitting ? "Running Audit Engine..." : "Run AI Spend Audit"}
          {!isSubmitting && <Rocket className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
