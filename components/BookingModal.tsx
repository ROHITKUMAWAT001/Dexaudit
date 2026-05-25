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
import { captureLead } from "@/lib/actions/leads";
import { toast } from "sonner";

interface BookingModalProps {
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export function BookingModal({ children, onOpenChange }: BookingModalProps) {
  const [loading, setLoading] = React.useState(false);
  const [internalOpen, setInternalOpen] = React.useState(false);

  const handleOpenChange = (open: boolean) => {
    setInternalOpen(open);
    if (onOpenChange) onOpenChange(open);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const honeypot = formData.get("website") as string;
    
    if (honeypot) {
      // Quietly reject bots
      setTimeout(() => {
        setLoading(false);
        handleOpenChange(false);
      }, 1000);
      return;
    }

    const data = {
      email: formData.get("email") as string,
      company_name: formData.get("company_name") as string,
      team_size: parseInt(formData.get("team_size") as string) || 0,
    };

    const result = await captureLead(data);

    setTimeout(() => {
      setLoading(false);
      if (result.success) {
        toast.success("Consultation request received! We'll reach out within 24 hours.");
        handleOpenChange(false);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }, 800);
  };

  return (
    <Dialog open={internalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children || <Button>Book Consultation</Button>}</DialogTrigger>
      <DialogContent className="overflow-hidden border-none p-0 shadow-2xl sm:max-w-[480px]">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary shadow-sm">
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
            {/* Honeypot field for anti-spam */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  name="company_name"
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
                  name="team_size"
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
                name="email"
                type="email"
                placeholder="cto@company.com"
                className="h-12 bg-slate-50/30"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-2 h-12 w-full bg-primary text-base font-bold shadow-md transition-all hover:bg-primary/90"
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
