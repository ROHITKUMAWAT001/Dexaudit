"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, Terminal } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">DexAudit</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Documentation
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button size="sm">Start Audit</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </Link>
            <div className="pt-4 px-3">
              <Button className="w-full">Start Audit</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
