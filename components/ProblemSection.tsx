import * as React from "react";
import { AlertCircle, TrendingDown, Users, Wallet } from "lucide-react";

const painPoints = [
  {
    title: "Ghost Seat Leakage",
    description:
      "Unused licenses for Cursor and Claude are costing you thousands every month without providing any value.",
    icon: Users,
  },
  {
    title: "Plan Mismatch",
    description:
      "Your team is on Pro plans where Team plans would save 30%, or paying for Enterprise features you don't use.",
    icon: TrendingDown,
  },
  {
    title: "Shadow AI Spend",
    description:
      "Engineers are expensing individual tools that aren't integrated into your central budget or security policy.",
    icon: AlertCircle,
  },
  {
    title: "Incoherent Stack",
    description:
      "Paying for Gemini, GPT-4, and Claude simultaneously for the same tasks due to lack of coordination.",
    icon: Wallet,
  },
];

export function ProblemSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              AI isn&apos;t too expensive. <br />
              <span className="text-primary">Your stack is just unoptimized.</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Most engineering teams overspend on AI tools by 40% due to redundant subscriptions and
              poor seat management. DexAudit finds the waste so you can focus on building.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="text-sm font-medium text-slate-700">
                  Average waste detected: $1,240/mo per 10 engineers
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <point.icon size={20} />
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{point.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
