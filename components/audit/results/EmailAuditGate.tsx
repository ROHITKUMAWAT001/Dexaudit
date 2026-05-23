"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailAuditGate({ onUnlock }: { onUnlock: () => void }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onUnlock();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg space-y-8 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-2xl"
      >
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Lock size={32} />
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900">
            Unlock Your Full Audit
          </h2>
          <p className="font-medium leading-relaxed text-slate-500">
            We&apos;ve detected significant savings. Enter your work email to view the detailed
            tool-by-tool breakdown and implementation plan.
          </p>{" "}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-2">
            <label className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
              Work Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="email"
                required
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 pl-12 focus:ring-primary/20"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="h-14 w-full rounded-2xl text-lg font-black shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Generating Report..." : "Get Detailed Results"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              GDPR Compliant
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              No Spam
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
