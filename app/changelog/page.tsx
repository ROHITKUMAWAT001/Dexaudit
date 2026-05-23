import { LegalLayout } from "@/components/LegalLayout";

export default function ChangelogPage() {
  return (
    <LegalLayout title="Changelog" subtitle="Product updates and engine recalibrations.">
      <div className="space-y-12">
        <div className="relative border-l-2 border-slate-100 pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white bg-primary shadow-sm" />
          <div className="mb-2 flex items-center gap-3">
            <span className="text-sm font-black text-slate-900">v1.2.0</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              May 2026
            </span>
          </div>
          <h3 className="mb-3 text-lg font-bold text-slate-900">Stateless Sharing Engine</h3>
          <ul className="list-inside list-disc space-y-2 text-slate-600">
            <li>Implemented Base64 stateless audit encoding for instant sharing.</li>
            <li>Added professional PDF report generation (beta).</li>
            <li>Improved mobile UI for Results Dashboard.</li>
          </ul>
        </div>

        <div className="relative border-l-2 border-slate-100 pl-8 opacity-60">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white bg-slate-300" />
          <div className="mb-2 flex items-center gap-3">
            <span className="text-sm font-black text-slate-900">v1.1.0</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              April 2026
            </span>
          </div>
          <h3 className="mb-3 text-lg font-bold text-slate-900">Multi-model Support</h3>
          <ul className="list-inside list-disc space-y-2 text-slate-600">
            <li>Integrated Anthropic and Google Gemini pricing benchmarks.</li>
            <li>Added &apos;Ghost Seat&apos; detection algorithm.</li>
            <li>Launched custom B2B landing page.</li>{" "}
          </ul>
        </div>

        <div className="relative border-l-2 border-slate-100 pl-8 opacity-40">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-white bg-slate-200" />
          <div className="mb-2 flex items-center gap-3">
            <span className="text-sm font-black text-slate-900">v1.0.0</span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              March 2026
            </span>
          </div>
          <h3 className="mb-3 text-lg font-bold text-slate-900">The Genesis</h3>
          <ul className="list-inside list-disc space-y-2 text-slate-600">
            <li>Initial release of the AI Spend Audit engine.</li>
            <li>Support for Cursor and ChatGPT Enterprise plans.</li>
            <li>Secure Lead Capture integration.</li>
          </ul>
        </div>
      </div>
    </LegalLayout>
  );
}
