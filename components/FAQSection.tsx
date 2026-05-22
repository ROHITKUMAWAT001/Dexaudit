"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What exactly is DexAudit?",
    answer: "DexAudit is an intelligent capital optimization engine designed specifically for engineering teams. We analyze your AI tool subscriptions (Cursor, Claude, OpenAI, etc.) to detect unused licenses, plan mismatches, and overlapping features.",
  },
  {
    question: "How does the AI audit work technically?",
    answer: "Our engine performs a surgical scan of your team's seat assignments and usage frequency using read-only API access. We cross-reference this with current pricing models to find precise saving opportunities.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. Security is our first priority. DexAudit uses read-only tokens, is SOC2 compliant, and never stores or reads your proprietary code. All audit data is anonymized.",
  },
  {
    question: "How accurate are the AI-generated insights?",
    answer: "Our recommendations are backed by a database of real-time SaaS pricing and usage benchmarks. We provide 99.9% accuracy in identifying seat-leakage and potential savings.",
  },
  {
    question: "What kind of pricing plans do you offer?",
    answer: "DexAudit offers a 'Free Scan' for teams up to 10 engineers. For larger organizations, our 'Capital Plan' includes continuous monitoring and boardroom-ready reporting.",
  },
  {
    question: "How much time does it take to see value?",
    answer: "Most teams receive their first surgical report and identify major savings within 15 minutes of connecting their primary stack.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-12 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300", openIndex === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
