"use client";

import * as React from "react";
import { motion } from "framer-motion";

const startups = [
  { name: "Acme AI", logo: "AC" },
  { name: "GlobalTech", logo: "GT" },
  { name: "CloudScale", logo: "CS" },
  { name: "DataFlow", logo: "DF" },
  { name: "NextLogic", logo: "NL" },
  { name: "AlphaStream", logo: "AS" },
];

const tweets = [
  {
    author: "Sarah J.",
    handle: "@sarahbuilds",
    content:
      "DexAudit saved us $14k/year in about 10 minutes. The seat leakage detection is insane. 🤯",
  },
  {
    author: "Marc K.",
    handle: "@marctech",
    content:
      "Finally a tool that understands engineering spend. Surgical precision is the right word for it.",
  },
  {
    author: "Elena R.",
    handle: "@elenadev",
    content:
      "If you're a startup using Cursor/Claude/GPT-4 for your whole team, you NEED to run an audit. Game changer.",
  },
];

export function SocialProof() {
  return (
    <section className="overflow-hidden border-y bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Optimizing Capital for Forward-Thinking Startups
        </p>

        {/* Logo Carousel (Static for now, but styled for motion) */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:gap-16">
          {startups.map((startup) => (
            <div key={startup.name} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 font-bold text-slate-400">
                {startup.logo}
              </div>
              <span className="text-lg font-bold text-slate-900">{startup.name}</span>
            </div>
          ))}
        </div>

        {/* Tweet Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {tweets.map((tweet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border bg-slate-50/50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200" />
                <div>
                  <div className="font-bold leading-none text-slate-900">{tweet.author}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{tweet.handle}</div>
                </div>
              </div>
              <p className="italic leading-relaxed text-slate-700">&quot;{tweet.content}&quot;</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Product Hunt: #1 Product of the Day
          </div>
        </div>
      </div>
    </section>
  );
}
