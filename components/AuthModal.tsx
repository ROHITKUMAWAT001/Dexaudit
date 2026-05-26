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
import { Mail, Github, Gitlab, Terminal, Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { login, signup } from "@/lib/actions/auth";

interface AuthModalProps {
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export function AuthModal({ children, onOpenChange }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [internalOpen, setInternalOpen] = React.useState(false);

  // Use either the controlled prop or the internal state
  const handleOpenChange = (open: boolean) => {
    setInternalOpen(open);
    if (onOpenChange) onOpenChange(open);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const action = isSignUp ? signup : login;

    const result = await action(formData);

    if (result.success) {
      toast.success(isSignUp ? "Account created successfully!" : "Logged in successfully!");
      handleOpenChange(false);

      // Force a hard refresh to ensure the Navbar picks up the new session immediately
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      toast.error(result.error || "Authentication failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Dialog open={internalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Sign In</Button>}
      </DialogTrigger>
      <DialogContent className="overflow-hidden rounded-[2rem] border-none p-0 shadow-2xl sm:max-w-[400px]">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary shadow-sm">
                <Terminal size={28} strokeWidth={2.5} />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-black tracking-tight text-slate-900">
              {isSignUp ? "Create Account" : "Welcome back"}
            </DialogTitle>
            <DialogDescription className="mt-2 px-4 text-center text-sm font-medium leading-relaxed text-slate-500">
              {isSignUp
                ? "Join DexAudit to track your AI infrastructure spend surgically."
                : "Enter your credentials to access your surgical audit dashboard."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="grid gap-1.5">
                  <Label
                    htmlFor="email"
                    className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-400"
                  >
                    Work Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                      className="h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-11 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <Label
                    htmlFor="pass"
                    className="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-400"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="pass"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      minLength={6}
                      className="h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-11 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-14 w-full rounded-xl text-base font-black shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98]"
                >
                  {loading
                    ? "Authenticating..."
                    : isSignUp
                      ? "Create Free Account"
                      : "Sign In to Dashboard"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4 opacity-70" />}
                </Button>
              </div>
            </form>

            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm font-bold text-primary transition-colors hover:text-primary/80"
            >
              {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100" />
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="bg-white px-4 text-slate-400">Enterprise SSO</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-slate-200 bg-white font-bold text-slate-700 shadow-sm hover:bg-slate-50"
                type="button"
                onClick={() => toast.info("GitHub SSO integration pending verified domain.")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-slate-200 bg-white font-bold text-slate-700 shadow-sm hover:bg-slate-50"
                type="button"
                onClick={() => toast.info("GitLab SSO integration pending verified domain.")}
              >
                <Gitlab className="mr-2 h-5 w-5 text-[#FC6D26]" />
                GitLab
              </Button>
            </div>
          </div>

          <div className="mt-10 text-center text-[11px] font-medium uppercase leading-relaxed tracking-tight text-slate-400">
            Protected by industrial-grade security.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
