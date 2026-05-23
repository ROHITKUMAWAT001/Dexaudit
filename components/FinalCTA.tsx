"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Abstract Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Ready to recalibrate your <br className="hidden md:block" /> engineering capital?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg opacity-80 md:text-xl">
          Join 480+ teams using DexAudit to build leaner, smarter, and more efficient AI stacks.
          Start your deep-scan audit today for free.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-bold shadow-xl">
            Start Free Audit
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-primary-foreground/20 bg-transparent px-8 text-base font-bold hover:bg-white/10"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
