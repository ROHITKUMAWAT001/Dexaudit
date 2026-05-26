import { Metadata } from "next";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing | DexAudit",
  description:
    "Transparent pricing for startups of all sizes. Audit your AI spend and start saving today.",
};

export default function PricingPage() {
  return (
    <main className="pt-16 selection:bg-primary/10 selection:text-primary">
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
