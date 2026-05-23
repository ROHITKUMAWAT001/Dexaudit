"use client"

import { useState } from "react"
import { useAuditStore } from "@/lib/store/useAuditStore"
import { Navbar } from "@/components/Navbar"
import { ScanningTerminal } from "@/components/audit/results/ScanningTerminal"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Share2, Download } from "lucide-react"

export default function ResultsPage() {
  const [isScanning, setIsScanning] = useState(true)
  const { selectedTools, teamSize, toolDetails } = useAuditStore()

  return (
    <main className="min-h-screen bg-slate-50/50 pt-24 pb-12">
      <Navbar />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isScanning ? (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="py-12"
            >
              <ScanningTerminal 
                tools={selectedTools} 
                onComplete={() => setIsScanning(false)} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              {/* Results Placeholder for Phase 6 */}
              <div className="text-center py-20 space-y-6 bg-white rounded-3xl border border-slate-200 shadow-xl p-12">
                 <div className="mx-auto h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 text-emerald-600 shadow-sm">
                    <CheckCircle2 size={40} strokeWidth={2.5} />
                 </div>
                 <div className="space-y-2">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900">Audit Complete</h1>
                    <p className="text-slate-500 text-lg max-w-lg mx-auto font-medium">
                      We've analyzed your stack and detected <strong>$12,400+</strong> in potential annual savings across your toolchain.
                    </p>
                 </div>
                 <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="h-14 px-8 text-lg font-black shadow-xl">
                       View Full Dashboard
                       <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <div className="flex gap-3">
                       <Button variant="outline" size="lg" className="h-14 w-14 p-0 rounded-2xl">
                          <Share2 size={24} />
                       </Button>
                       <Button variant="outline" size="lg" className="h-14 w-14 p-0 rounded-2xl">
                          <Download size={24} />
                       </Button>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
