import * as React from "react";
import { Lock, Info, Calendar } from "lucide-react";

export function ReportMethodology() {
  return (
    <div className="flex h-[1123px] w-[794px] flex-col border-[12px] border-slate-50 bg-white p-20">
      {/* Header */}
      <div className="mb-16 flex items-center justify-between border-b border-slate-100 pb-12">
        <div className="space-y-1">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Audit Methodology & Security
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Section 03 / Compliance & Logic
          </p>
        </div>
      </div>

      <div className="grow space-y-16">
        {/* Security Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Lock size={20} className="text-primary" />
            <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">
              Data Privacy Guarantee
            </h3>
          </div>
          <p className="text-base leading-relaxed text-slate-600">
            DexAudit operates under a zero-retention policy for raw financial credentials. All audit
            data is processed in a stateless environment. No proprietary engineering data or
            IP-sensitive material is ingested or stored beyond the generated report identifiers.
          </p>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <ul className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                SOC 2 Type II Compliant
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                AES-256 Encryption
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                GDPR / CCPA Ready
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                Non-training LLM policy
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Info size={20} className="text-primary" />
            <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">
              Analytical Methodology
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-500">
              The DexAudit engine utilizes a 4-layer verification process to determine arbitrage
              opportunities:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 rounded-xl border border-slate-50 p-4">
                <div className="font-black text-primary">01.</div>
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-widest text-slate-900">
                    Plan Floor Delta
                  </p>
                  <p className="text-xs text-slate-500">
                    Cross-referencing seat minimums against actual team occupancy to detect
                    mandatory floor wastage.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-slate-50 p-4">
                <div className="font-black text-primary">02.</div>
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-widest text-slate-900">
                    Tier-Feature Alignment
                  </p>
                  <p className="text-xs text-slate-500">
                    Auditing used features against plan tiers to downgrade Enterprise-level seats
                    that only utilize Pro-level tooling.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-slate-50 p-4">
                <div className="font-black text-primary">03.</div>
                <div>
                  <p className="mb-1 text-xs font-black uppercase tracking-widest text-slate-900">
                    Secondary Market Credits
                  </p>
                  <p className="text-xs text-slate-500">
                    Calculating potential savings through Credex discounted credit liquidity pools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="relative mt-12 flex items-center justify-between overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white shadow-2xl">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
        <div className="relative">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            Next Steps
          </p>
          <h4 className="mb-2 text-xl font-black tracking-tight">Ready to implement?</h4>
          <p className="max-w-xs text-xs font-medium text-slate-400">
            Contact your managed migration expert to capture identified liquidity.
          </p>
        </div>
        <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-3">
          <Calendar size={18} className="text-primary" />
          <span className="text-sm font-bold">credex.inc/audit-followup</span>
        </div>
      </div>

      {/* Page Footer */}
      <div className="mt-12 flex items-center justify-between border-t border-slate-50 pt-8 text-[10px] font-bold tracking-widest text-slate-400">
        <p>© 2026 CREDEX INC. ALL RIGHTS RESERVED.</p>
        <p>REPORT END</p>
      </div>
    </div>
  );
}
