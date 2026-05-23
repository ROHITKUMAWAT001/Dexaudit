"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts"
import { AuditResult } from "@/lib/audit-engine"

interface SavingsChartsProps {
  results: AuditResult[]
}

export function SavingsCharts({ results }: SavingsChartsProps) {
  const barData = results.map(r => ({
    name: r.toolName,
    current: r.currentSpend,
    optimized: r.optimizedSpend,
  }))

  const pieData = results.map(r => ({
    name: r.toolName,
    value: r.currentSpend,
  }))

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Spend Comparison Bar Chart */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Spend Comparison (Monthly)</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} 
              />
              <Tooltip 
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="current" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={32} />
              <Bar dataKey="optimized" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6">
           <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-slate-200" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Current</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-primary" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Optimized</span>
           </div>
        </div>
      </div>

      {/* Spend Distribution Pie Chart */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Spend Distribution</h3>
        <div className="h-[300px] w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
           {pieData.map((item, i) => (
             <div key={i} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.name}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
