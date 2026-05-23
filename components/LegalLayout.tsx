import { Navbar } from "@/components/Navbar";

export function LegalLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-24">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="mb-16 space-y-4 text-center sm:text-left">
          <h1 className="text-4xl font-black tracking-tighter text-slate-900">{title}</h1>
          {subtitle && <p className="text-lg font-medium text-slate-500">{subtitle}</p>}
          <div className="h-1.5 w-12 rounded-full bg-primary" />
        </div>
        <div className="prose prose-slate prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed max-w-none">
          {children}
        </div>
      </div>
    </main>
  );
}
