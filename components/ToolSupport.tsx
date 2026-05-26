import * as React from "react";

const tools = [
  { name: "Cursor", logo: "/tools/cursor.svg" },
  { name: "Claude", logo: "/tools/claude.svg" },
  { name: "ChatGPT", logo: "/tools/chatgpt.svg" },
  { name: "Gemini", logo: "/tools/gemini.svg" },
  { name: "Copilot", logo: "/tools/copilot.svg" },
  { name: "v0.dev", logo: "/tools/v0.svg" },
];

export function ToolSupport() {
  return (
    <section className="bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Auditing the world&apos;s most <br /> powerful AI tools.
          </h2>
          <p className="text-lg text-muted-foreground">
            We support automated audit reports for all major engineering-focused AI platforms and
            IDEs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex cursor-default items-center gap-3 rounded-xl border bg-white px-6 py-4 shadow-sm grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="flex h-6 w-6 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.logo} alt={tool.name} className="h-5 w-5 object-contain" />
              </div>
              <span className="font-bold text-slate-700">{tool.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    AI Tool
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Pro Plan
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Team Plan
                  </th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Typical Savings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {[
                  {
                    name: "Cursor",
                    logo: "/tools/cursor.svg",
                    pro: "$20",
                    team: "$40",
                    savings: "25%",
                  },
                  {
                    name: "Claude",
                    logo: "/tools/claude.svg",
                    pro: "$20",
                    team: "$30",
                    savings: "30%",
                  },
                  {
                    name: "ChatGPT",
                    logo: "/tools/chatgpt.svg",
                    pro: "$20",
                    team: "$25",
                    savings: "15%",
                  },
                ].map((row) => (
                  <tr key={row.name} className="transition-colors hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={row.logo}
                          alt={row.name}
                          className="h-4 w-4 opacity-70 grayscale"
                        />
                        <span className="font-bold text-slate-900">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-600">{row.pro}/mo</td>
                    <td className="px-6 py-4 font-medium text-slate-600">{row.team}/mo</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              * Benchmarks updated daily based on public SaaS pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
