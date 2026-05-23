"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAuditStore } from "@/lib/store/useAuditStore"
import { ProgressBar } from "@/components/ui/progress-bar"
import { Navbar } from "@/components/Navbar"
import { Step1Context } from "@/components/audit/steps/Step1Context"
import { Step2ToolSelection } from "@/components/audit/steps/Step2ToolSelection"
import { Step3Pricing } from "@/components/audit/steps/Step3Pricing"
import { Step4Review } from "@/components/audit/steps/Step4Review"
import { Terminal } from "lucide-react"

export default function NewAuditPage() {
  const { currentStep } = useAuditStore()

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Context />
      case 2: return <Step2ToolSelection />
      case 3: return <Step3Pricing />
      case 4: return <Step4Review />
      default: return <Step1Context />
    }
  }

  const stepLabels = ["Context", "Tools", "Finance", "Review"]

  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-12">
      <Navbar />
      
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
               <Terminal size={20} />
             </div>
             <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">New Spend Audit</h1>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Step {currentStep} of 4: {stepLabels[currentStep - 1]}
                </p>
             </div>
          </div>
        </div>

        <div className="mb-8">
          <ProgressBar current={currentStep} total={4} className="rounded-full" />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 text-center">
           <p className="text-xs text-slate-400 font-medium italic">
             "Precision auditing is the foundation of capital efficiency."
           </p>
        </div>
      </div>
    </main>
  )
}
