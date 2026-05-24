import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StripeCancelPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-slate-100">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500 border border-red-100 shadow-inner">
          <XCircle size={40} strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-4">Payment Cancelled</h1>
        <p className="text-slate-500 font-medium leading-relaxed mb-8">
          The checkout process was cancelled. No charges were made to your card. If you experienced any issues, please contact our support.
        </p>
        <Button asChild variant="outline" size="lg" className="w-full h-14 rounded-2xl text-lg font-bold border-slate-200">
          <Link href="/pricing">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Pricing
          </Link>
        </Button>
      </div>
    </main>
  );
}
