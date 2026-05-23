import { LegalLayout } from "@/components/LegalLayout";
import { ShieldCheck, Zap, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <LegalLayout title="About DexAudit" subtitle="The mission to recalibrate engineering capital.">
      <section className="space-y-12">
        <div className="space-y-4">
          <p className="text-xl font-medium leading-relaxed">
            Most engineering teams overspend on AI tools by 40% due to redundant subscriptions and
            poor seat management. We built DexAudit to find that waste.
          </p>
          <p>
            Founded by the team at Credex, DexAudit is a free tool designed to give startup founders
            and CTOs surgical clarity on their AI infrastructure spend. We believe capital is the
            lifeblood of innovation, and every dollar saved on redundant licenses is a dollar that
            can be reinvested into building better products.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Precision</h3>
            <p className="text-sm text-slate-500">Real-time pricing data and usage-benchmarking.</p>
          </div>
          <div className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
              <Zap size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Efficiency</h3>
            <p className="text-sm text-slate-500">
              Identify arbitrage opportunities in under 5 minutes.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
              <Rocket size={20} />
            </div>
            <h3 className="font-bold text-slate-900">Growth</h3>
            <p className="text-sm text-slate-500">
              Directly integrated with Credex credit ecosystem.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="mb-4 text-xl font-black tracking-tight">Our Core Belief</h3>
          <p className="italic leading-relaxed text-slate-400">
            &quot;AI isn&apos;t too expensive. Your stack is just unoptimized. We are here to bridge
            the gap between engineering power and fiscal responsibility.&quot;
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
