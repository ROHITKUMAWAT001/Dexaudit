"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { useAuditStore } from "@/lib/store/useAuditStore";

export function Hero() {
  const { selectedTools } = useAuditStore();
  const hasAudit = selectedTools.length > 0;

  return (
    <div className="relative overflow-hidden pt-[64px]">
      {/* Custom Blurred Background Image */}
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-80 blur-3xl scale-110"
        style={{ backgroundImage: `url('https://res.cloudinary.com/ddvxls9az/image/upload/v1779723788/bgDex_e0dzi9.png')` }}
      />
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 -z-10 bg-slate-50/40 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32 relative z-10">
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
            <Button asChild size="lg" className="h-12 w-full px-8 text-base font-bold sm:w-auto shadow-xl shadow-primary/20">
              <Link href="/audit/new">
                Start Free Audit
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full bg-white px-8 text-base font-bold sm:w-auto border-slate-200"
            >
              <Link href={hasAudit ? "/audit/results" : "/audit/new"}>
                {hasAudit ? "View My Report" : "View Sample Report"}
              </Link>
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
