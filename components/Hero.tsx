"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Zap, MousePointer2, MessageSquare, Brain } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-50/50 pt-[64px]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_80%_30%,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_20%_60%,rgba(16,185,129,0.05)_0%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center rounded-full border border-primary/10 bg-white px-3 py-1 text-sm font-medium text-primary shadow-sm"
            >
              <ShieldCheck size={14} className="mr-2" />
              Trusted by 480+ Engineering Teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
            >
              Audit your AI spend with <br />
              <span className="text-primary">surgical precision.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              The intelligent audit engine that detects seat-leakage, recalibrates your AI stack,
              and optimizes your capital for maximum engineering efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16 flex flex-col items-start gap-4 sm:flex-row"
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
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 border-t pt-8"
            >
              <div>
                <span className="block text-2xl font-bold text-slate-900">$2.4M</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Capital Saved
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">100%</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Data Privacy
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">14.2x</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Avg. ROI
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white p-1 shadow-2xl">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[14px] bg-slate-50">
                {/* Mock Nav */}
                <div className="flex h-12 items-center justify-between border-b bg-white px-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-12 rounded bg-slate-100" />
                  </div>
                  <div className="flex h-6 w-20 items-center justify-center rounded-full border border-primary/10 bg-primary/5 text-[10px] font-bold text-primary">
                    LIVE AUDIT
                  </div>
                </div>
                {/* Mock Content */}
                <div className="flex flex-1 flex-col gap-6 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Monthly Spend
                      </span>
                      <div className="mt-1 text-2xl font-bold text-slate-900">$12,480</div>
                      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "70%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-red-400"
                        />
                      </div>
                    </div>
                    <div className="rounded-xl border bg-white p-4 shadow-sm">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Recalibrated
                      </span>
                      <div className="mt-1 text-2xl font-bold text-emerald-600">$8,210</div>
                      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-emerald-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between rounded-xl border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Seat Leakage detected
                      </span>
                      <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between border-b border-slate-50 py-2 last:border-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-slate-100" />
                            <div className="h-3 w-24 rounded bg-slate-50" />
                          </div>
                          <div className="h-3 w-12 rounded bg-red-50" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Tool Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center rounded-2xl border bg-white text-primary shadow-xl"
              >
                <MousePointer2 size={28} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-8 top-1/2 flex h-14 w-14 items-center justify-center rounded-2xl border bg-white text-orange-500 shadow-lg"
              >
                <MessageSquare size={24} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 right-1/4 flex h-12 w-12 items-center justify-center rounded-2xl border bg-white text-indigo-500 shadow-lg"
              >
                <Brain size={20} />
              </motion.div>
            </div>

            {/* Savings Preview Bubble */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 max-w-[200px] rounded-2xl bg-primary p-6 text-primary-foreground shadow-2xl"
            >
              <Zap size={24} className="mb-2 text-emerald-400" />
              <div className="text-sm font-medium opacity-80">Annual Savings</div>
              <div className="text-3xl font-black">$42.8k</div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1.5 }}
                  className="h-full bg-emerald-400"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
