"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Zap, MousePointer2, MessageSquare, Brain } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-50/50 pt-[64px]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_30%,rgba(59,130,246,0.08)_0%,transparent_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_50%_60%,rgba(16,185,129,0.04)_0%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
          >
            <ShieldCheck size={14} className="mr-2" />
            Trusted by 480+ Engineering Teams
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
          >
            Audit your AI spend with <br />
            <span className="text-primary">surgical precision.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            The intelligent audit engine that detects seat-leakage, recalibrates your AI stack,
            and optimizes your capital for maximum engineering efficiency.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-20 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="h-12 w-full px-8 text-base sm:w-auto">
              Start Free Audit
              <ChevronRight size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full bg-white px-8 text-base sm:w-auto"
            >
              View Sample Report
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid w-full max-w-3xl grid-cols-3 gap-8 border-t pt-10"
          >
            <div className="flex flex-col items-center">
              <span className="block text-2xl font-bold text-slate-900">$2.4M</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Capital Saved
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-2xl font-bold text-slate-900">100%</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Data Privacy
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="block text-2xl font-bold text-slate-900">14.2x</span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Avg. ROI
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
