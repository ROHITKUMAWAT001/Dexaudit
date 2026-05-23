"use client"

import { useAuditStore } from "@/lib/store/useAuditStore"
import { SUPPORTED_TOOLS } from "@/lib/tools"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Wallet, TrendingDown, Code2, Bot, Sparkles, Cpu, Terminal, Layout } from "lucide-react"

const LOGO_MAP: Record<string, any> = {
  cursor: Code2,
  claude: Bot,
  chatgpt: Sparkles,
  gemini: Cpu,
  "github-copilot": Terminal,
  v0: Layout
}

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
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Financial details</h2>
        <p className="text-slate-500 text-sm">Provide current usage and spend for each tool to calculate potential arbitrage.</p>
      </div>

      <div className="space-y-6">
        {tools.map((tool) => {
          const detail = toolDetails[tool.id] || { plan: "", monthlySpend: 0, seats: 0 }
          const Icon = LOGO_MAP[tool.id] || Sparkles
          
          return (
            <div key={tool.id} className="rounded-2xl border border-slate-100 p-6 space-y-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-primary shadow-sm">
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{tool.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tool.category}</p>
                  </div>
                </div>
                {detail.monthlySpend > 0 && detail.seats > 0 && (
                   <div className="hidden sm:block text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. Cost/Seat</div>
                      <div className="text-sm font-black text-slate-900">${(detail.monthlySpend / detail.seats).toFixed(2)}</div>
                   </div>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <div className="grid gap-2">
                  <Label htmlFor={`${tool.id}-plan`} className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Current Plan</Label>
                  <select
                    id={`${tool.id}-plan`}
                    className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
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
                  <Label htmlFor={`${tool.id}-spend`} className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Monthly Spend ($)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">$</span>
                    <Input
                      id={`${tool.id}-spend`}
                      type="number"
                      placeholder="0"
                      className="pl-7 h-11 bg-slate-50/50 border-slate-200"
                      value={detail.monthlySpend || ""}
                      onChange={(e) => updateToolDetail(tool.id, { monthlySpend: parseFloat(e.target.value) || 0 })}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor={`${tool.id}-seats`} className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Total Seats</Label>
                  <Input
                    id={`${tool.id}-seats`}
                    type="number"
                    placeholder="0"
                    className="h-11 bg-slate-50/50 border-slate-200"
                    value={detail.seats || ""}
                    onChange={(e) => updateToolDetail(tool.id, { seats: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              {/* Dynamic Recommendation Teaser */}
              {detail.seats > 0 && detail.monthlySpend > 0 && (
                <div className="pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50/50 rounded-lg px-3 py-2 border border-emerald-100/50">
                     <TrendingDown size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-wider">Arbitrage Opportunity Detected</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="flex justify-between pt-4 border-t">
        <Button variant="ghost" onClick={prevStep} className="font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={nextStep} disabled={!isComplete} className="h-11 px-8 font-bold shadow-md">
          Review Audit
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
