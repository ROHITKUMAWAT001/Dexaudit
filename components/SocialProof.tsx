"use client"

import * as React from "react"
import { motion } from "framer-motion"

const startups = [
  { name: "Acme AI", logo: "AC" },
  { name: "GlobalTech", logo: "GT" },
  { name: "CloudScale", logo: "CS" },
  { name: "DataFlow", logo: "DF" },
  { name: "NextLogic", logo: "NL" },
  { name: "AlphaStream", logo: "AS" },
]

const tweets = [
  {
    author: "Sarah J.",
    handle: "@sarahbuilds",
    content: "DexAudit saved us $14k/year in about 10 minutes. The seat leakage detection is insane. 🤯",
  },
  {
    author: "Marc K.",
    handle: "@marctech",
    content: "Finally a tool that understands engineering spend. Surgical precision is the right word for it.",
  },
  {
    author: "Elena R.",
    handle: "@elenadev",
    content: "If you're a startup using Cursor/Claude/GPT-4 for your whole team, you NEED to run an audit. Game changer.",
  },
]

export function SocialProof() {
  return (
    <section className="border-y bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-12">
          Optimizing Capital for Forward-Thinking Startups
        </p>
        
        {/* Logo Carousel (Static for now, but styled for motion) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center mb-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {startups.map((startup) => (
            <div key={startup.name} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 font-bold text-slate-400">
                {startup.logo}
              </div>
              <span className="font-bold text-slate-900 text-lg">{startup.name}</span>
            </div>
          ))}
        </div>

        {/* Tweet Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tweets.map((tweet, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border bg-slate-50/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-slate-200" />
                <div>
                  <div className="font-bold text-slate-900 leading-none">{tweet.author}</div>
                  <div className="text-xs text-muted-foreground mt-1">{tweet.handle}</div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                "{tweet.content}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Product Hunt: #1 Product of the Day
          </div>
        </div>
      </div>
    </section>
  )
}
