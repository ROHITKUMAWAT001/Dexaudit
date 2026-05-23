"use client"

import { useAuditStore } from "@/lib/store/useAuditStore"
import { SUPPORTED_TOOLS } from "@/lib/tools"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

export function Step2ToolSelection() {
  const { selectedTools, toggleTool, nextStep, prevStep } = useAuditStore()

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Select your AI tools</h2>
        <p className="text-muted-foreground text-sm">Choose the tools currently used by your engineering team.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {SUPPORTED_TOOLS.map((tool) => {
          const isSelected = selectedTools.includes(tool.id)
          return (
            <button
              key={tool.id}
              onClick={() => toggleTool(tool.id)}
              className={cn(
                "group relative flex flex-col items-center justify-center gap-3 rounded-xl border p-6 transition-all hover:bg-slate-50",
                isSelected 
                  ? "border-primary bg-primary/5 ring-1 ring-primary" 
                  : "border-slate-200 bg-white"
              )}
            >
              {isSelected && (
                <div className="absolute right-2 top-2 text-primary">
                  <CheckCircle2 className="h-5 w-5 fill-white" />
                </div>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-white shadow-sm transition-transform group-hover:scale-110">
                {/* Placeholder for tool icon */}
                <div className="text-xs font-bold text-slate-400">{tool.name[0]}</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-900">{tool.name}</div>
                <div className="text-[10px] text-muted-foreground">{tool.category}</div>
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={prevStep}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={nextStep} disabled={selectedTools.length === 0}>
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
