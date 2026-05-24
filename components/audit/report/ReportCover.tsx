import * as React from "react";
import { Terminal, ShieldCheck, FileCheck } from "lucide-react";

interface ReportCoverProps {
  auditId: string;
  timestamp: string;
}

export function ReportCover({ auditId, timestamp }: ReportCoverProps) {
  return (
    <div className="w-[794px] h-[1123px] bg-white p-20 flex flex-col justify-between border-[12px] border-slate-50 relative overflow-hidden">
      {/* Decorative Luxury Element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-xl">
            <Terminal size={24} strokeWidth={2.5} />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">DEXAUDIT</span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary leading-none mt-0.5">Surgical Intelligence</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <ShieldCheck size={14} />
            VERIFIED AUDIT
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="space-y-8 relative">
        <div className="h-1 w-24 bg-primary rounded-full" />
        <h1 className="text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
          AI Infrastructure <br />
          <span className="text-slate-400 font-medium">Optimization Audit</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
          A defensible financial analysis and strategic roadmap for engineering tool stack efficiency.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-16 border-t border-slate-100 pt-12">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Report Identification</p>
            <p className="text-sm font-bold text-slate-900 font-mono">{auditId}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Audit Completion</p>
            <p className="text-sm font-bold text-slate-900">{timestamp}</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Issuing Entity</p>
            <p className="text-sm font-bold text-slate-900 leading-tight">CREDEX INC.<br />Secondary Market Intelligence</p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Classification</p>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <FileCheck size={16} className="text-primary" />
                Confidential - External Audit
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-widest uppercase border-t border-slate-50 pt-8">
            <p>© 2026 CREDEX INC. ALL RIGHTS RESERVED.</p>
            <p>DO-PN: 104-552-01</p>
        </div>
      </div>
    </div>
  );
}
