"use client"

import { useAuditStore } from "@/lib/store/useAuditStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export function Step1Context() {
  const { teamSize, companyStage, primaryUseCase, aiMaturity, setContext, nextStep } = useAuditStore()

  const canContinue = teamSize && companyStage && primaryUseCase && aiMaturity

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tell us about your team</h2>
        <p className="text-slate-500 text-sm">This helps us benchmark your spend against similar sized companies.</p>
      </div>

      <div className="grid gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="teamSize" className="text-xs font-bold uppercase tracking-wider text-slate-500">Engineering Team Size</Label>
            <Input 
              id="teamSize" 
              type="number" 
              placeholder="e.g. 25" 
              value={teamSize}
              onChange={(e) => setContext({ teamSize: e.target.value })}
              className="h-12 bg-slate-50/30"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="companyStage" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Stage</Label>
            <select 
              id="companyStage"
              className="flex h-12 w-full rounded-md border border-input bg-slate-50/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={companyStage}
              onChange={(e) => setContext({ companyStage: e.target.value })}
            >
              <option value="">Select stage...</option>
              <option value="seed">Seed / Pre-seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b">Series B+</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="primaryUseCase" className="text-xs font-bold uppercase tracking-wider text-slate-500">Primary Use-case</Label>
            <select 
              id="primaryUseCase"
              className="flex h-12 w-full rounded-md border border-input bg-slate-50/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={primaryUseCase}
              onChange={(e) => setContext({ primaryUseCase: e.target.value })}
            >
              <option value="">Select use-case...</option>
              <option value="full-stack">Full-stack Dev</option>
              <option value="data-science">Data Science / ML</option>
              <option value="devops">DevOps / Infra</option>
              <option value="product">Product / Prototyping</option>
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="aiMaturity" className="text-xs font-bold uppercase tracking-wider text-slate-500">AI Maturity</Label>
            <select 
              id="aiMaturity"
              className="flex h-12 w-full rounded-md border border-input bg-slate-50/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={aiMaturity}
              onChange={(e) => setContext({ aiMaturity: e.target.value })}
            >
              <option value="">Select maturity...</option>
              <option value="curious">Exploring (Curious)</option>
              <option value="integrated">Early Adoption (Integrated)</option>
              <option value="power">Advanced (AI-First Workflow)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t">
        <Button onClick={nextStep} disabled={!canContinue} className="h-11 px-8 font-bold shadow-md">
          Continue to Tools
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
