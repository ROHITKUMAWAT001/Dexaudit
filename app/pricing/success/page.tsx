import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StripeSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-500 shadow-inner">
          <CheckCircle2 size={40} strokeWidth={2.5} />
        </div>
        <h1 className="mb-4 text-3xl font-black tracking-tight text-slate-900">
          Payment Successful!
        </h1>
        <p className="mb-8 font-medium leading-relaxed text-slate-500">
          Thank you for upgrading to DexAudit Pro. Your credits have been added to your account, and
          you can now run multi-tool surgical audits.
        </p>
        <Button
          asChild
          size="lg"
          className="h-14 w-full rounded-2xl text-lg font-bold shadow-xl shadow-primary/20"
        >
          <Link href="/audit/new">
            Start New Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="mt-6 text-xs font-black uppercase tracking-widest text-slate-400">
          A receipt has been sent to your email.
        </p>
      </div>
    </main>
  );
}
