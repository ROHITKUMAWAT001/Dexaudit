"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Users, Building, Send } from "lucide-react";

interface BookingModalProps {
  children?: React.ReactNode;
}

export function BookingModal({ children }: BookingModalProps) {
  const [loading, setLoading] = React.useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Lead capture logic
    setTimeout(() => {
      setLoading(false);
      alert("Consultation request received! We'll reach out within 24 hours.");
    }, 1200);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children || <Button>Book Consultation</Button>}</DialogTrigger>
      <DialogContent className="overflow-hidden border-none p-0 shadow-2xl sm:max-w-[480px]">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-sm">
                <Calendar size={28} strokeWidth={2.5} />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-bold tracking-tight text-slate-900">
              Book a Capital Audit
            </DialogTitle>
            <DialogDescription className="mt-2 text-center text-sm leading-relaxed text-slate-500">
              For teams with {">"}$2k/mo AI spend. Our experts will manually review your stack to
              find maximum arbitrage opportunities.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleBooking} className="grid gap-5">
            <div className="grid gap-2">
              <Label
                htmlFor="company"
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Company Name
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  id="company"
                  placeholder="Acme AI"
                  className="h-12 bg-slate-50/30 pl-10"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="team-size"
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Engineering Team Size
              </Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  id="team-size"
                  type="number"
                  placeholder="10"
                  className="h-12 bg-slate-50/30 pl-10"
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor="work-email"
                className="text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                Work Email
              </Label>
              <Input
                id="work-email"
                type="email"
                placeholder="cto@company.com"
                className="h-12 bg-slate-50/30"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 h-12 w-full bg-emerald-600 text-base font-bold shadow-md transition-all hover:bg-emerald-700"
            >
              {loading ? "Submitting..." : "Request Free Consultation"}
              {!loading && <Send className="ml-2 h-4 w-4 opacity-70" />}
            </Button>
          </form>

          <div className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Average response time: 4 hours
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
