"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, ShieldCheck, Zap, BarChart3, MousePointer2, MessageSquare, Brain, Code2 } from "lucide-react"

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-[64px] bg-slate-50/50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_80%_30%,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_20%_60%,rgba(16,185,129,0.05)_0%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/10 bg-white px-3 py-1 text-sm font-medium text-primary shadow-sm mb-8"
            >
              <ShieldCheck size={14} className="mr-2" />
              Trusted by 480+ Engineering Teams
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl mb-8 leading-[1.1]"
            >
              Audit your AI spend with <br />
              <span className="text-primary">surgical precision.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              The intelligent audit engine that detects seat-leakage, recalibrates your AI stack, 
              and optimizes your capital for maximum engineering efficiency.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-16"
            >
              <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                Start Free Audit
                <ChevronRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white w-full sm:w-auto">
                View Sample Report
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t"
            >
              <div>
                <span className="block text-2xl font-bold text-slate-900">$2.4M</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">Capital Saved</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">100%</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">Data Privacy</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">14.2x</span>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">Avg. ROI</span>
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
            <div className="relative rounded-2xl border bg-white shadow-2xl overflow-hidden aspect-[4/3] p-1">
              <div className="h-full w-full rounded-[14px] bg-slate-50 overflow-hidden flex flex-col">
                {/* Mock Nav */}
                <div className="h-12 border-b bg-white px-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-12 h-3 rounded bg-slate-100" />
                  </div>
                  <div className="w-20 h-6 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                    LIVE AUDIT
                  </div>
                </div>
                {/* Mock Content */}
                <div className="flex-1 p-6 flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border bg-white shadow-sm">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Monthly Spend</span>
                      <div className="text-2xl font-bold text-slate-900 mt-1">$12,480</div>
                      <div className="h-1 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "70%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-red-400" 
                        />
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border bg-white shadow-sm">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Recalibrated</span>
                      <div className="text-2xl font-bold text-emerald-600 mt-1">$8,210</div>
                      <div className="h-1 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "45%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-emerald-400" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4 rounded-xl border bg-white shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Seat Leakage detected</span>
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    </div>
                    <div className="space-y-3 mt-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-slate-100" />
                            <div className="w-24 h-3 rounded bg-slate-50" />
                          </div>
                          <div className="w-12 h-3 rounded bg-red-50" />
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
                className="absolute -top-6 -right-6 h-16 w-16 rounded-2xl bg-white border shadow-xl flex items-center justify-center text-primary"
              >
                <MousePointer2 size={28} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-8 h-14 w-14 rounded-2xl bg-white border shadow-lg flex items-center justify-center text-orange-500"
              >
                <MessageSquare size={24} />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 right-1/4 h-12 w-12 rounded-2xl bg-white border shadow-lg flex items-center justify-center text-indigo-500"
              >
                <Brain size={20} />
              </motion.div>
            </div>

            {/* Savings Preview Bubble */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-primary text-primary-foreground shadow-2xl max-w-[200px]"
            >
              <Zap size={24} className="mb-2 text-emerald-400" />
              <div className="text-sm font-medium opacity-80">Annual Savings</div>
              <div className="text-3xl font-black">$42.8k</div>
              <div className="mt-2 h-1 w-full bg-white/20 rounded-full overflow-hidden">
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
  )
}
