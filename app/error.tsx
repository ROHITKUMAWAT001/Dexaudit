"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 p-6 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-100 bg-white text-red-500 shadow-xl">
        <AlertTriangle size={40} strokeWidth={2.5} />
      </div>
      <h1 className="mb-2 text-3xl font-black uppercase italic tracking-tighter text-slate-900">
        Engine Malfunction
      </h1>
      <p className="mb-10 max-w-md font-medium leading-relaxed text-slate-500">
        The audit engine encountered an unexpected error. Don&apos;t worry, your progress is likely
        saved in your local session.
      </p>
      <Button onClick={() => reset()} className="h-12 px-8 font-black shadow-lg">
        <RefreshCcw size={18} className="mr-2" />
        Retry Audit Engine
      </Button>
    </div>
  );
}
