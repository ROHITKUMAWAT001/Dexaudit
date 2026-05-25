"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { AuditResult } from "@/lib/audit-engine";
import { SUPPORTED_TOOLS } from "@/lib/tools";
import * as React from "react";

interface SavingsChartsProps {
  results: AuditResult[];
}

const CustomTick = (props: any) => {
  const { x, y, payload } = props;
  const tool = SUPPORTED_TOOLS.find((t) => t.name === payload.value || t.id === payload.value);
  
  // Responsive icon size
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const size = isMobile ? 14 : 20;

  return (
    <g transform={`translate(${x - size / 2},${y + 10})`}>
      {tool?.logo ? (
        <image
          xlinkHref={tool.logo}
          x="0"
          y="0"
          width={size}
          height={size}
          style={{ filter: "grayscale(100%)", opacity: 0.8 }}
        />
      ) : (
        <text x="0" y="15" fill="#64748b" fontSize={isMobile ? "8" : "10"} fontWeight="700">
          {payload.value}
        </text>
      )}
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl z-[150]">
        <p className="mb-2 text-xs font-black uppercase tracking-widest text-slate-400">{label}</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-8">
            <span className="text-sm font-medium text-slate-500">Current Spend</span>
            <span className="text-sm font-bold text-slate-900">${payload[0].value}</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <span className="text-sm font-medium text-slate-500">Optimized</span>
            <span className="text-sm font-bold text-emerald-600">${payload[1].value}</span>
          </div>
          <div className="mt-2 border-t border-slate-50 pt-2 flex items-center justify-between gap-8">
            <span className="text-sm font-bold text-primary">Potential Savings</span>
            <span className="text-sm font-black text-primary">
              ${payload[0].value - payload[1].value}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function SavingsCharts({ results }: SavingsChartsProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const barData = results.map((r) => ({
    name: r.toolName,
    current: r.currentSpend,
    optimized: r.optimizedSpend,
  }));

  const pieData = results.map((r) => ({
    name: r.toolName,
    value: r.currentSpend,
  }));

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Spend Comparison Bar Chart */}
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm overflow-hidden">
        <h3 className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
          Spend Comparison (Monthly)
        </h3>
        <div className="h-[250px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 0, right: 10, left: isMobile ? -30 : -20, bottom: 20 }}>
              <defs>
                <linearGradient id="optimizedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e2e8f0" stopOpacity={1} />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={<CustomTick />}
                interval={0}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fontWeight: 700, fill: "#64748b" }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc" }} />
              <Bar
                dataKey="current"
                fill="url(#currentGradient)"
                radius={[4, 4, 0, 0]}
                barSize={isMobile ? 20 : 32}
              />
              <Bar
                dataKey="optimized"
                fill="url(#optimizedGradient)"
                radius={[4, 4, 0, 0]}
                barSize={isMobile ? 20 : 32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-slate-200" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Current
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Optimized
            </span>
          </div>
        </div>
      </div>

      {/* Spend Distribution Pie Chart */}
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm overflow-hidden">
        <h3 className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
          Spend Distribution
        </h3>
        <div className="flex h-[250px] sm:h-[300px] w-full items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={isMobile ? 45 : 60}
                outerRadius={isMobile ? 75 : 100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
          {pieData.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
