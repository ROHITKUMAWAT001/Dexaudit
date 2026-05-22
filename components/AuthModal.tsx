"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Github } from "lucide-react"

interface AuthModalProps {
  children?: React.ReactNode
}

export function AuthModal({ children }: AuthModalProps) {
  const [email, setEmail] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Supabase logic will go here
    setTimeout(() => {
      setLoading(false)
      alert("Magic link sent to " + email)
    }, 1000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Sign In</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">Welcome back</DialogTitle>
          <DialogDescription>
            Enter your email below to receive a magic link to sign in.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <form onSubmit={handleMagicLink}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Send Magic Link"}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={() => alert("Social login coming soon")}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
        
        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </DialogContent>
    </Dialog>
  )
}
