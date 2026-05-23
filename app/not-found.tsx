import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 p-6 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-100 bg-white text-primary shadow-xl">
        <Terminal size={40} strokeWidth={2.5} />
      </div>
      <h1 className="mb-2 text-6xl font-black tracking-tighter text-slate-900">404</h1>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">Lost in the stack?</h2>
      <p className="mb-10 max-w-md font-medium leading-relaxed text-slate-50">
        The page you are looking for doesn&apos;t exist. It might have been moved or the audit
        session has expired.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild className="h-12 px-8 font-black shadow-lg">
          <Link href="/">
            <Home size={18} className="mr-2" />
            Return Home
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-12 bg-white px-8 font-black">
          <Link href="/audit/new">
            <Search size={18} className="mr-2" />
            New Audit
          </Link>
        </Button>
      </div>
    </div>
  );
}
