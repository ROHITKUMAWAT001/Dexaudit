import * as React from "react"
import { AlertCircle, TrendingDown, Users, Wallet } from "lucide-react"

const painPoints = [
  {
    title: "Ghost Seat Leakage",
    description: "Unused licenses for Cursor and Claude are costing you thousands every month without providing any value.",
    icon: Users,
  },
  {
    title: "Plan Mismatch",
    description: "Your team is on Pro plans where Team plans would save 30%, or paying for Enterprise features you don't use.",
    icon: TrendingDown,
  },
  {
    title: "Shadow AI Spend",
    description: "Engineers are expensing individual tools that aren't integrated into your central budget or security policy.",
    icon: AlertCircle,
  },
  {
    title: "Incoherent Stack",
    description: "Paying for Gemini, GPT-4, and Claude simultaneously for the same tasks due to lack of coordination.",
    icon: Wallet,
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              AI isn't too expensive. <br />
              <span className="text-primary">Your stack is just unoptimized.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Most engineering teams overspend on AI tools by 40% due to redundant subscriptions and poor seat management. DexAudit finds the waste so you can focus on building.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Average waste detected: $1,240/mo per 10 engineers</span>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <point.icon size={20} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
