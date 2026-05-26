import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ToolSupport } from "@/components/ToolSupport";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "DexAudit | Surgical AI Spend Intelligence for Startups",
  description:
    "Detect seat-leakage and optimize your engineering capital. The #1 audit engine for Cursor, Claude, and GPT-4 team stacks.",
  openGraph: {
    title: "DexAudit | Surgical AI Spend Intelligence",
    description: "Detect seat-leakage and optimize your engineering capital.",
    type: "website",
    url: "https://dexaudit.com",
    siteName: "DexAudit",
  },
  twitter: {
    card: "summary_large_image",
    title: "DexAudit | Surgical AI Spend Intelligence",
    description: "Detect seat-leakage and optimize your engineering capital.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Hero />
      <SocialProof />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorks />
      <ToolSupport />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <StickyMobileCTA />
    </main>
  );
}
