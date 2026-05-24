"use client";

import * as React from "react";
import { Check, ShieldCheck, Zap, Building2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { createCheckoutSession } from "@/lib/actions/stripe";
import { toast } from "sonner";

const plans = [
  {
    name: "Free Audit",
    price: "$0",
    description: "Perfect for solo founders and small side projects.",
    features: [
      "Single-tool audit",
      "Basic savings detection",
      "PDF Summary",
      "Public share link",
    ],
    cta: "Start for free",
    icon: Zap,
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For high-growth startups and small engineering teams.",
    features: [
      "Multi-tool stack audit",
      "Ghost seat detection",
      "Plan arbitrage insights",
      "API access for automation",
      "Priority email support",
    ],
    cta: "Optimize Now",
    icon: ShieldCheck,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex AI infrastructure.",
    features: [
      "Everything in Pro",
      "Manual auditor review",
      "Custom integration mapping",
      "SLA & Dedicated support",
      "Quarterly ROI reviews",
    ],
    cta: "Contact Sales",
    icon: Building2,
    popular: false,
  },
];

export function PricingSection() {
  const [loadingPlan, setLoadingPlan] = React.useState<string | null>(null);

  const handleSubscription = async (planName: string) => {
    if (planName === "Free Audit") {
      toast.info("Free audits can be started directly from the home page.");
      return;
    }
    
    if (planName === "Enterprise") {
      toast.success("Sales team notified! We'll reach out to your work email.");
      return;
    }

    setLoadingPlan(planName);
    const result = await createCheckoutSession(planName);

    if (result.url) {
      window.location.href = result.url;
    } else {
      toast.error(result.error || "Failed to start checkout session.");
      setLoadingPlan(null);
    }
  };

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-black uppercase tracking-widest text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Surgical precision. <br /> Predictable investment.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choose the plan that fits your team's stage. Most teams recover the annual cost of DexAudit in their first scan.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 transition-all duration-300 ${
                plan.popular
                  ? "bg-slate-900 ring-slate-900 shadow-2xl scale-105 lg:z-10"
                  : "bg-white ring-slate-200 hover:ring-primary/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-bold leading-8 ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-primary">
                      Most Popular
                    </p>
                  )}
                </div>
                <p className={`mt-4 text-sm leading-6 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-4xl font-black tracking-tight ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-sm font-semibold leading-6 ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      /audit
                    </span>
                  )}
                </p>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    plan.popular ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className={`h-6 w-5 flex-none ${plan.popular ? "text-primary" : "text-primary"}`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                size="lg"
                variant={plan.popular ? "default" : "outline"}
                disabled={loadingPlan !== null}
                onClick={() => handleSubscription(plan.name)}
                className={`mt-8 w-full font-bold ${
                  plan.popular ? "bg-primary hover:bg-primary/90" : "hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {loadingPlan === plan.name ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  plan.cta
                )}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            * All audits include a 100% data privacy guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
