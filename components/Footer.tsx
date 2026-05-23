"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
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
              <a
                href="https://github.com/credex"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/credex"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/credex"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
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
