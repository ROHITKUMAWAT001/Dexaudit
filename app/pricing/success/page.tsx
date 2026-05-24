import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StripeSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-slate-100">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 shadow-inner">
          <CheckCircle2 size={40} strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-4">Payment Successful!</h1>
        <p className="text-slate-500 font-medium leading-relaxed mb-8">
          Thank you for upgrading to DexAudit Pro. Your credits have been added to your account, and you can now run multi-tool surgical audits.
        </p>
        <Button asChild size="lg" className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
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
