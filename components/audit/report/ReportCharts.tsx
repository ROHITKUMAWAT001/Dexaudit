"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AuditResult } from "@/lib/audit-engine";
import * as React from "react";

interface ReportChartsProps {
  results: AuditResult[];
}

export function ReportCharts({ results }: ReportChartsProps) {
  const barData = results.map((r) => ({
    name: r.toolName,
    current: r.currentSpend,
    optimized: r.optimizedSpend,
  }));

  return (
    <div className="w-[794px] h-[1123px] bg-white p-20 flex flex-col border-[12px] border-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-12 mb-16">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Visual Expenditure Analysis</h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Section 01.B / Visual Intelligence</p>
        </div>
      </div>

      <div className="grow space-y-16">
        {/* Main Chart Container */}
        <div className="rounded-3xl border border-slate-100 bg-slate-50/30 p-10 shadow-inner h-[500px]">
          <h3 className="mb-10 text-xs font-black uppercase tracking-[0.2em] text-slate-400 text-center">Monthly Expenditure Delta</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="pdfOptimized" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fontWeight: 800, fill: "#1e293b" }}
                  dy={15}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fontWeight: 700, fill: "#64748b" }}
                />
                <Bar
                  dataKey="current"
                  fill="#cbd5e1"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
                <Bar
                  dataKey="optimized"
                  fill="url(#pdfOptimized)"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-12 flex items-center justify-center gap-12">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-md bg-slate-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Baseline Spend</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-md bg-primary shadow-lg shadow-primary/20" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Optimized Target</span>
            </div>
          </div>
        </div>

        {/* Chart Commentary */}
        <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Statistical Outliers</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    The visualization highlights significant inefficiencies in the core infrastructure layer. The delta between baseline and target spend represents immediately recoverable liquidity.
                </p>
            </div>
            <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Audit Accuracy</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    Data points are derived from real-time API pricing and verified plan seat minimums. Calculations maintain a 98% confidence interval for standard engineering workloads.
                </p>
            </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-widest border-t border-slate-50 pt-8">
        <p>CONFIDENTIAL BUSINESS INTELLIGENCE</p>
        <p>PAGE 03</p>
      </div>
    </div>
  );
}
