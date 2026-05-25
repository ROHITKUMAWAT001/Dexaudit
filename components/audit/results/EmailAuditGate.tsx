"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { captureLead } from "@/lib/actions/leads";
import { useAuditStore } from "@/lib/store/useAuditStore";
import { runSurgicalAudit } from "@/lib/audit-engine";
import { toast } from "sonner";

export function EmailAuditGate({ onUnlock }: { onUnlock: () => void }) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { teamSize, selectedTools, toolDetails } = useAuditStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      onUnlock(); // Quietly unlock but don't save to DB
      return;
    }

    setIsSubmitting(true);

    const auditResults = runSurgicalAudit(selectedTools, toolDetails, teamSize);
    const totalMonthlyCurrent = auditResults.reduce((acc, r) => acc + r.currentSpend, 0);
    const totalMonthlyOptimized = auditResults.reduce((acc, r) => acc + r.optimizedSpend, 0);
    const totalAnnualSavings = (totalMonthlyCurrent - totalMonthlyOptimized) * 12;

    const result = await captureLead({
      email,
      company_name: company,
      role,
      team_size: teamSize,
      audit_data: { selectedTools, toolDetails },
      savings: totalAnnualSavings,
    });

    if (result.success) {
      toast.success("Identity verified. Unlocking your report.");
      setTimeout(() => {
        onUnlock();
      }, 800);
    } else {
      toast.error("Verification failed. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden"
      >
        <button
          onClick={onUnlock}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 text-slate-400 hover:text-slate-900 transition-colors"
          type="button"
          aria-label="Close and view report"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="space-y-3">
          <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Lock size={24} className="sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900">
            Unlock Your Full Audit
          </h2>
          <p className="text-sm font-medium leading-relaxed text-slate-500">
            We&apos;ve detected significant savings. Enter your details to view the detailed
            tool-by-tool breakdown and implementation plan.
          </p>{" "}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="space-y-1.5">
            <label htmlFor="gate-email" className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
              Work Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="gate-email"
                type="email"
                required
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-11 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="gate-company" className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                Company (Optional)
              </label>
              <Input
                id="gate-company"
                placeholder="Acme AI"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="gate-role" className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
                Role (Optional)
              </label>
              <Input
                id="gate-role"
                placeholder="CTO / Eng Lead"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:ring-primary/20"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-2 h-14 w-full rounded-2xl text-lg font-black shadow-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Generating Report..." : "Get Detailed Results"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <button
            type="button"
            onClick={onUnlock}
            className="mt-4 w-full text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors py-2"
          >
            Skip for now, view report directly
          </button>
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
