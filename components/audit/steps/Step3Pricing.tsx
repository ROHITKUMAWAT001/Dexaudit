"use client"

import { useAuditStore } from "@/lib/store/useAuditStore"
import { SUPPORTED_TOOLS } from "@/lib/tools"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Wallet } from "lucide-react"

export function Step3Pricing() {
  const { selectedTools, toolDetails, updateToolDetail, nextStep, prevStep } = useAuditStore()

  const tools = SUPPORTED_TOOLS.filter((t) => selectedTools.includes(t.id))

  const isComplete = tools.every((tool) => {
    const detail = toolDetails[tool.id]
    return detail && detail.plan && detail.monthlySpend > 0 && detail.seats > 0
  })

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Financial details</h2>
        <p className="text-muted-foreground text-sm">Provide current usage and spend for each tool to calculate potential arbitrage.</p>
      </div>

      <div className="space-y-8">
        {tools.map((tool) => {
          const detail = toolDetails[tool.id] || { plan: "", monthlySpend: 0, seats: 0 }
          
          return (
            <div key={tool.id} className="rounded-xl border border-slate-200 p-6 space-y-4 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-50 border text-[10px] font-bold">
                  {tool.name[0]}
                </div>
                <h3 className="font-bold text-slate-900">{tool.name}</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor={`${tool.id}-plan`} className="text-xs uppercase tracking-wider text-slate-500 font-bold">Current Plan</Label>
                  <select
                    id={`${tool.id}-plan`}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={detail.plan}
                    onChange={(e) => updateToolDetail(tool.id, { plan: e.target.value })}
                  >
                    <option value="">Select plan...</option>
                    {tool.plans.map((plan) => (
                      <option key={plan} value={plan}>{plan}</option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`${tool.id}-spend`} className="text-xs uppercase tracking-wider text-slate-500 font-bold">Monthly Spend ($)</Label>
                  <Input
                    id={`${tool.id}-spend`}
                    type="number"
                    placeholder="0"
                    value={detail.monthlySpend || ""}
                    onChange={(e) => updateToolDetail(tool.id, { monthlySpend: parseFloat(e.target.value) || 0 })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`${tool.id}-seats`} className="text-xs uppercase tracking-wider text-slate-500 font-bold">Total Seats</Label>
                  <Input
                    id={`${tool.id}-seats`}
                    type="number"
                    placeholder="0"
                    value={detail.seats || ""}
                    onChange={(e) => updateToolDetail(tool.id, { seats: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={prevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={nextStep} disabled={!isComplete}>
          Review Audit
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
