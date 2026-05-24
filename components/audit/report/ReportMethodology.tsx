import * as React from "react";
import { Lock, Info, ExternalLink, Calendar } from "lucide-react";

export function ReportMethodology() {
  return (
    <div className="w-[794px] h-[1123px] bg-white p-20 flex flex-col border-[12px] border-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-12 mb-16">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Audit Methodology & Security</h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Section 03 / Compliance & Logic</p>
        </div>
      </div>

      <div className="grow space-y-16">
        {/* Security Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <Lock size={20} className="text-primary" />
             <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Data Privacy Guarantee</h3>
          </div>
          <p className="text-base leading-relaxed text-slate-600">
            DexAudit operates under a zero-retention policy for raw financial credentials. All audit data is processed in a stateless environment. No proprietary engineering data or IP-sensitive material is ingested or stored beyond the generated report identifiers.
          </p>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
             <ul className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-primary rounded-full" />
                    SOC 2 Type II Compliant
                </li>
                <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-primary rounded-full" />
                    AES-256 Encryption
                </li>
                <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-primary rounded-full" />
                    GDPR / CCPA Ready
                </li>
                <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-primary rounded-full" />
                    Non-training LLM policy
                </li>
             </ul>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <Info size={20} className="text-primary" />
             <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">Analytical Methodology</h3>
          </div>
          <div className="space-y-4">
             <p className="text-sm leading-relaxed text-slate-500">
                The DexAudit engine utilizes a 4-layer verification process to determine arbitrage opportunities:
             </p>
             <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl border border-slate-50">
                    <div className="text-primary font-black">01.</div>
                    <div>
                        <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">Plan Floor Delta</p>
                        <p className="text-xs text-slate-500">Cross-referencing seat minimums against actual team occupancy to detect mandatory floor wastage.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-slate-50">
                    <div className="text-primary font-black">02.</div>
                    <div>
                        <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">Tier-Feature Alignment</p>
                        <p className="text-xs text-slate-500">Auditing used features against plan tiers to downgrade Enterprise-level seats that only utilize Pro-level tooling.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl border border-slate-50">
                    <div className="text-primary font-black">03.</div>
                    <div>
                        <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">Secondary Market Credits</p>
                        <p className="text-xs text-slate-500">Calculating potential savings through Credex discounted credit liquidity pools.</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white flex items-center justify-between shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Next Steps</p>
            <h4 className="text-xl font-black tracking-tight mb-2">Ready to implement?</h4>
            <p className="text-xs text-slate-400 font-medium max-w-xs">Contact your managed migration expert to capture identified liquidity.</p>
        </div>
        <div className="relative bg-white/10 px-6 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
            <Calendar size={18} className="text-primary" />
            <span className="text-sm font-bold">credex.inc/audit-followup</span>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-widest border-t border-slate-50 pt-8 mt-12">
        <p>© 2026 CREDEX INC. ALL RIGHTS RESERVED.</p>
        <p>REPORT END</p>
      </div>
    </div>
  );
}
