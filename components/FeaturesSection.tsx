import * as React from "react"
import { BarChart4, ClipboardCheck, Lightbulb, Share2, Users2, Zap } from "lucide-react"

const features = [
  {
    name: "Deep Audit Engine",
    description: "Our proprietary algorithm scans your AI tool stack to find overlapping features and redundant accounts.",
    icon: ClipboardCheck,
  },
  {
    name: "Leakage Detection",
    description: "Identify 'ghost seats'—licenses assigned to inactive team members or former employees.",
    icon: Zap,
  },
  {
    name: "Smart Insights",
    description: "Get AI-generated recommendations on tool consolidation and cheaper, more effective alternatives.",
    icon: Lightbulb,
  },
  {
    name: "Team Optimization",
    description: "Analyze usage patterns to ensure your team is on the most cost-effective tier for their needs.",
    icon: Users2,
  },
  {
    name: "Visual Reporting",
    description: "Export high-fidelity, boardroom-ready reports showing total savings and ROI metrics.",
    icon: BarChart4,
  },
  {
    name: "Viral Sharing",
    description: "Generate public, anonymized audit links to showcase your team's efficiency to investors.",
    icon: Share2,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Powerful Capabilities</h2>
          <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Engineered for clarity. Built for savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="group p-8 rounded-2xl bg-white border shadow-sm hover:border-primary/20 hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
