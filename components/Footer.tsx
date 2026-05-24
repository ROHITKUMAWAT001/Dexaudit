"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, Github, Twitter, Linkedin, Loader2 } from "lucide-react";
import { captureLead } from "@/lib/actions/leads";
import { toast } from "sonner";
import * as React from "react";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How it Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Audit Engine", href: "/audit/new" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Changelog", href: "/changelog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export function Footer() {
  const [loading, setLoading] = React.useState(false);

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      setTimeout(() => setLoading(false), 1000);
      return;
    }

    const email = formData.get("email") as string;

    const result = await captureLead({ email, role: "Newsletter Subscriber" });

    if (result.success) {
      toast.success("Welcome! You're now on the list.");
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("Subscription failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition-transform group-hover:scale-110">
                <ShieldCheck size={18} />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
                DexAudit
              </span>
            </Link>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-slate-500">
              Surgical AI Spend Intelligence for high-growth engineering teams. Optimize your stack
              in under 5 minutes.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/credex" },
                { icon: Twitter, href: "https://x.com/credex" },
                { icon: Linkedin, href: "https://linkedin.com/company/credex" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary hover:shadow-sm"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-sm font-bold text-slate-600 transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ArrowRight
                          size={12}
                          className="ml-1 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 rounded-2xl border border-slate-100 bg-slate-50/50 p-8 xl:mt-24">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-lg font-black text-slate-900">Stay optimized.</h3>
              <p className="mt-2 text-sm font-medium text-slate-500">
                Get monthly benchmarks and AI spend optimization tips delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full max-w-sm items-center gap-2" onSubmit={handleNewsletter}>
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="cto@acme.ai"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/5"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="h-11 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95 disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Join"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-50 pt-8 sm:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            © 2026 Credex Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
