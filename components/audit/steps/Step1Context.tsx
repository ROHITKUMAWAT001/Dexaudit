"use client"

import { useAuditStore } from "@/lib/store/useAuditStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

export function Step1Context() {
  const { teamSize, companyStage, setContext, nextStep } = useAuditStore()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Tell us about your team</h2>
        <p className="text-muted-foreground text-sm">This helps us benchmark your spend against similar sized companies.</p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="teamSize">Engineering Team Size</Label>
          <Input 
            id="teamSize" 
            type="number" 
            placeholder="e.g. 25" 
            value={teamSize}
            onChange={(e) => setContext({ teamSize: e.target.value })}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="companyStage">Company Stage</Label>
          <select 
            id="companyStage"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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

      <div className="flex justify-end pt-4">
        <Button onClick={nextStep} disabled={!teamSize || !companyStage}>
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
