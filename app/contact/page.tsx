"use client";

import { LegalLayout } from "@/components/LegalLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <LegalLayout title="Contact Us" subtitle="Have questions about AI spend optimization?">
      <div className="grid gap-12 md:grid-cols-2">
        <section className="space-y-8">
          <p className="leading-relaxed text-slate-600">
            Interested in an Enterprise-grade audit or have specific questions about our
            methodology? Reach out to our engineering team directly.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Email
                </div>
                <div className="text-sm font-bold text-slate-900">support@dexaudit.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Location
                </div>
                <div className="text-sm font-bold text-slate-900">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-2">
            <Label
              htmlFor="name"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="h-12 rounded-xl bg-slate-50/50"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="email"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              className="h-12 rounded-xl bg-slate-50/50"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="message"
              className="text-[10px] font-black uppercase tracking-widest text-slate-400"
            >
              Message
            </Label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="How can we help?"
              className="w-full rounded-xl border border-input bg-slate-50/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl font-black shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </LegalLayout>
  );
}
