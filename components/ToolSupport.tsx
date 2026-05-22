import * as React from "react"

const tools = [
  { name: "Cursor", color: "bg-blue-500" },
  { name: "Claude", color: "bg-orange-500" },
  { name: "ChatGPT", color: "bg-emerald-500" },
  { name: "Gemini", color: "bg-indigo-500" },
  { name: "Copilot", color: "bg-slate-900" },
  { name: "v0.dev", color: "bg-black" },
]

export function ToolSupport() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Auditing the world's most <br /> powerful AI tools.
          </h2>
          <p className="text-lg text-muted-foreground">
            We support automated audit reports for all major engineering-focused AI platforms and IDEs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border shadow-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-default">
              <div className={`h-3 w-3 rounded-full ${tool.color}`} />
              <span className="font-bold text-slate-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
