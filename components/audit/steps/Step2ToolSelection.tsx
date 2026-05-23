"use client";

import { useAuditStore } from "@/lib/store/useAuditStore";
import { SUPPORTED_TOOLS } from "@/lib/tools";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Search,
  Cpu,
  Code2,
  Bot,
  Sparkles,
  Terminal,
  Layout,
} from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LOGO_MAP: Record<string, any> = {
  cursor: Code2,
  claude: Bot,
  chatgpt: Sparkles,
  gemini: Cpu,
  "github-copilot": Terminal,
  v0: Layout,
};

export function Step2ToolSelection() {
  const { selectedTools, toggleTool, nextStep, prevStep } = useAuditStore();
  const [search, setSearch] = useState("");

  const filteredTools = SUPPORTED_TOOLS.filter(
    (tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Select your AI tools</h2>
        <p className="text-sm text-slate-500">
          Choose the tools currently used by your engineering team.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search tools (e.g. 'Cursor', 'Models')..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {filteredTools.map((tool) => {
          const isSelected = selectedTools.includes(tool.id);
          const Icon = LOGO_MAP[tool.id] || Sparkles;

          return (
            <button
              key={tool.id}
              onClick={() => toggleTool(tool.id)}
              className={cn(
                "group relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition-all duration-200",
                isSelected
                  ? "border-primary bg-primary/[0.03] shadow-sm ring-1 ring-primary"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
              )}
            >
              {isSelected && (
                <div className="absolute right-3 top-3 text-primary duration-300 animate-in zoom-in">
                  <CheckCircle2 className="h-5 w-5 fill-white" />
                </div>
              )}
              <div
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110",
                  isSelected
                    ? "border-primary/20 bg-white shadow-inner"
                    : "border-slate-100 bg-slate-50 shadow-sm"
                )}
              >
                <Icon size={28} className={isSelected ? "text-primary" : "text-slate-400"} />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold leading-tight text-slate-900">{tool.name}</div>
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {tool.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="rounded-2xl border-2 border-dashed border-slate-100 py-12 text-center">
          <p className="text-sm font-medium text-slate-400">
            No tools matching &quot;{search}&quot; found.
          </p>
        </div>
      )}

      <div className="flex justify-between border-t pt-4">
        <Button variant="ghost" onClick={prevStep} className="font-bold">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={selectedTools.length === 0}
          className="h-11 px-8 font-bold shadow-md"
        >
          Continue to Pricing
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
