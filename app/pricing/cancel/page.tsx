import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function StripeCancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-500 shadow-inner">
          <XCircle size={40} strokeWidth={2.5} />
        </div>
        <h1 className="mb-4 text-3xl font-black tracking-tight text-slate-900">
          Payment Cancelled
        </h1>
        <p className="mb-8 font-medium leading-relaxed text-slate-500">
          The checkout process was cancelled. No charges were made to your card. If you experienced
          any issues, please contact our support.
        </p>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-14 w-full rounded-2xl border-slate-200 text-lg font-bold"
        >
          <Link href="/pricing">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Pricing
          </Link>
        </Button>
      </div>
    </main>
  );
}
