"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 duration-700 animate-in slide-in-from-bottom-10 md:hidden">
      <Link href="/audit/new">
        <Button
          size="lg"
          className="h-14 w-full rounded-2xl text-lg font-black shadow-2xl shadow-primary/40"
        >
          Start Free Audit
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}
