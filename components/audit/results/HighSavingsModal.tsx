"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, TrendingUp } from "lucide-react";

interface HighSavingsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  savings: number;
}

export function HighSavingsModal({ isOpen, onOpenChange, savings }: HighSavingsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent 
        className="z-[110] !border-none !bg-transparent !p-0 !shadow-none !gap-0 sm:max-w-[440px] w-full !block overflow-visible outline-none ring-0 [scrollbar-gutter:auto!important]"
      >
        {/* Custom Container with forced overlap to kill sub-pixel white gaps */}
        <div className="relative -m-[1px] w-[calc(100%+2px)] bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col isolation-isolate">
          
          {/* Manual X Close Button */}
          {/* <button 
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-[130] rounded-full p-2 bg-black/5 hover:bg-slate-100 transition-colors group border border-transparent hover:border-slate-200 active:scale-95"
            aria-label="Close"
          >
            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-900 rotate-45" />
          </button> */}

          {/* Hidden but required for accessibility */}
          <div className="sr-only">
            <DialogHeader>
              <DialogTitle>Massive Savings Detected</DialogTitle>
              <DialogDescription>
                Qualified for a managed migration strategy call.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Premium Header */}
          <div className="relative w-full px-8 pb-8 pt-14 text-center border-b border-slate-100 bg-slate-50 flex flex-col items-center">
            <div className="absolute top-0 left-[-2px] w-[calc(100%+4px)] h-1.5 bg-primary" />

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-100/50 bg-emerald-50 shadow-inner">
              <TrendingUp size={36} className="text-emerald-500" strokeWidth={2.5} />
            </div>

            <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-900">
              Massive Savings Found
            </h2>

            <div className="mt-4">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400 bg-emerald-500 px-4 py-2 text-white shadow-lg shadow-emerald-500/20">
                <span className="text-lg font-black leading-none">${savings.toLocaleString()}</span>
                <span className="border-l border-white/20 pl-2 text-[10px] font-bold uppercase tracking-widest opacity-90">
                  Annual Potential
                </span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="flex w-full flex-col items-center bg-white px-8 py-10 text-center">
            <div className="mb-8 space-y-3 px-4">
              <p className="text-base font-medium leading-relaxed text-slate-600">
                You qualify for a{" "}
                <strong className="font-extrabold text-slate-900">
                  Free Managed Migration Strategy Call
                </strong>
                .
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                Our engineering experts will help you capture these savings without disrupting your engineering velocity.
              </p>
            </div>

            <div className="w-full space-y-4 px-2">
              <Button
                asChild
                size="lg"
                onClick={() => {
                  setTimeout(() => onOpenChange(false), 200);
                }}
                className="h-14 w-full bg-primary text-base font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98]"
              >
                <a href="https://calendly.com/credex-demo" target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
                </a>
              </Button>

              <button
                onClick={() => onOpenChange(false)}
                className="py-2 text-xs font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-primary active:scale-95"
              >
                Skip for now, view report
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
