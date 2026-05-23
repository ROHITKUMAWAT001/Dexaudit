import * as React from "react";
import { BarChart4, ClipboardCheck, Lightbulb, Share2, Users2, Zap } from "lucide-react";

const features = [
  {
    name: "Deep Audit Engine",
    description:
      "Our proprietary algorithm scans your AI tool stack to find overlapping features and redundant accounts.",
    icon: ClipboardCheck,
  },
  {
    name: "Leakage Detection",
    description:
      "Identify 'ghost seats'—licenses assigned to inactive team members or former employees.",
    icon: Zap,
  },
  {
    name: "Smart Insights",
    description:
      "Get AI-generated recommendations on tool consolidation and cheaper, more effective alternatives.",
    icon: Lightbulb,
  },
  {
    name: "Team Optimization",
    description:
      "Analyze usage patterns to ensure your team is on the most cost-effective tier for their needs.",
    icon: Users2,
  },
  {
    name: "Visual Reporting",
    description:
      "Export high-fidelity, boardroom-ready reports showing total savings and ROI metrics.",
    icon: BarChart4,
  },
  {
    name: "Viral Sharing",
    description:
      "Generate public, anonymized audit links to showcase your team's efficiency to investors.",
    icon: Share2,
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Powerful Capabilities
          </h2>
          <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Engineered for clarity. Built for savings.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group rounded-2xl border bg-white p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.name}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
