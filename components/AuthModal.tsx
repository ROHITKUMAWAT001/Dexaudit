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
import { Mail, Github, Gitlab, Terminal } from "lucide-react";

interface AuthModalProps {
  children?: React.ReactNode;
}

export function AuthModal({ children }: AuthModalProps) {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Supabase logic will go here
    setTimeout(() => {
      setLoading(false);
      alert("Magic link sent to " + email);
    }, 1000);
  };

  const handleProvider = (provider: string) => {
    alert(`Connecting to ${provider}... (Supabase integration pending)`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Sign In</Button>}
      </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="overflow-hidden border-none p-0 shadow-2xl sm:max-w-[400px]"
      >
        <div className="p-8">
          <DialogHeader className="mb-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-primary shadow-sm">
                <Terminal size={28} strokeWidth={2.5} />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-bold tracking-tight text-slate-900">
              Welcome back
            </DialogTitle>
            <DialogDescription className="mt-2 px-4 text-center text-sm leading-relaxed text-slate-500">
              Enter your email to receive a secure magic link for your account.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6">
            <form onSubmit={handleMagicLink}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="sr-only">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-slate-200 bg-slate-50/30 focus:border-primary/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full text-base font-bold shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
                >
                  {loading ? "Sending..." : "Continue with Email"}
                  {!loading && <Mail className="ml-2 h-4 w-4 opacity-70" />}
                </Button>
              </div>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100" />
              </div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
                <span className="bg-white px-4 text-slate-400">Secure OAuth</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-12 w-full border-slate-200 bg-white font-bold text-slate-700 shadow-sm hover:bg-slate-50"
                onClick={() => handleProvider("GitHub")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="h-12 w-full border-slate-200 bg-white font-bold text-slate-700 shadow-sm hover:bg-slate-50"
                onClick={() => handleProvider("GitLab")}
              >
                <Gitlab className="mr-2 h-5 w-5 text-[#FC6D26]" />
                GitLab
              </Button>
            </div>
          </div>

          <div className="mt-10 text-center text-[11px] leading-relaxed text-slate-400">
            By continuing, you agree to our{" "}
            <a href="#" className="font-bold text-slate-600 transition-colors hover:text-primary">
              Terms
            </a>{" "}
            &{" "}
            <a href="#" className="font-bold text-slate-600 transition-colors hover:text-primary">
              Privacy Policy
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
