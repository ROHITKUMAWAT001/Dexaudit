"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6">
          Ready to recalibrate your <br className="hidden md:block" /> engineering capital?
        </h2>
        <p className="mx-auto max-w-2xl text-lg md:text-xl opacity-80 mb-10">
          Join 480+ teams using DexAudit to build leaner, smarter, and more efficient AI stacks. 
          Start your deep-scan audit today for free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
            Start Free Audit
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground/20 hover:bg-white/10">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                <Terminal size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight">DexAudit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Industrial-grade AI spend intelligence for the modern engineering team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-24">
             <div>
                <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Product</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                   <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Audit Engine</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                </ul>
             </div>
             <div>
                <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                   <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                   <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                </ul>
             </div>
             <div className="col-span-2">
                <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest AI cost benchmarks delivered to your inbox.</p>
                <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                   <input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="flex-1 px-3 py-2 rounded-md border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                   />
                   <Button type="submit" size="sm">Subscribe</Button>
                </form>
             </div>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 DexAudit Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
