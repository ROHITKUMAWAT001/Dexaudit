"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MousePointer2, ScanSearch, TrendingUp, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Select Your Stack",
    description: "Connect your AI tools—from IDEs like Cursor to models like Claude and GPT-4.",
    icon: MousePointer2,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    number: "02",
    title: "Deep Scan",
    description: "Our engine performs a surgical scan of seats and tiers to detect overlap and leakage.",
    icon: ScanSearch,
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    number: "03",
    title: "Optimize ROI",
    description: "Get precise actions to recalibrate your spend and maximize engineering efficiency.",
    icon: TrendingUp,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">The Process</h2>
          <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From audit to savings in 3 steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className={`h-24 w-24 rounded-3xl ${step.bgColor} flex items-center justify-center ${step.color} mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 relative`}>
                  <step.icon size={32} />
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-white border shadow-sm flex items-center justify-center text-xs font-bold text-slate-900">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-[280px]">
                   <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                   <p className="text-muted-foreground leading-relaxed text-sm">
                     {step.description}
                   </p>
                </div>

                {/* Visual Connector (Mobile/Tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden h-12 w-px bg-slate-100 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl border bg-slate-50/50 flex flex-col items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-sm font-medium">SOC2 Compliant</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-sm font-medium">Read-Only Access</span>
             </div>
             <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border shadow-sm">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-sm font-medium">Automated Mapping</span>
             </div>
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
             Time to value: &lt; 15 Minutes
          </div>
        </motion.div>
      </div>
    </section>
  )
}
