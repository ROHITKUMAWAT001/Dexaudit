import { Metadata } from "next";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { ToolSupport } from "@/components/ToolSupport";

export const metadata: Metadata = {
  title: "Features | DexAudit",
  description: "Explore the powerful capabilities of the DexAudit AI spend optimization engine.",
};

export default function FeaturesPage() {
  return (
    <main className="pt-16 selection:bg-primary/10 selection:text-primary">
      <div className="bg-slate-50/50 border-b border-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Everything you need to <br />
            <span className="text-primary">optimize your AI stack.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From ghost seat detection to plan arbitrage, DexAudit provides the surgical precision required to manage modern engineering capital.
          </p>
        </div>
      </div>
      
      <FeaturesSection />
      <ProblemSection />
      <HowItWorks />
      <ToolSupport />
    </main>
  );
}
