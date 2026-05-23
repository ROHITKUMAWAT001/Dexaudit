"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/AuthModal"
import { BookingModal } from "@/components/BookingModal"
import { cn } from "@/lib/utils"
import { Menu, X, Terminal, User, LogOut, Settings, CreditCard } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false) // Placeholder for demo

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">DexAudit</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Pricing
              </Link>
              <BookingModal>
                 <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                   Consultation
                 </button>
              </BookingModal>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <AuthModal>
                   <Button variant="ghost" size="sm" className="font-bold">Sign In</Button>
                </AuthModal>
                <Link href="/audit/new">
                   <Button size="sm" className="font-bold shadow-sm">Start Audit</Button>
                </Link>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-slate-100 p-0 overflow-hidden border">
                    <User size={20} className="text-slate-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">Engineering Lead</p>
                      <p className="text-xs leading-none text-muted-foreground">cto@acme.ai</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer font-medium">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer font-medium">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer text-red-600 focus:text-red-600 font-bold" 
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
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
        <div className="md:hidden border-b bg-background p-4 animate-in slide-in-from-top-2 duration-300">
          <div className="space-y-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-bold hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-bold hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <BookingModal>
               <button className="w-full text-left rounded-md px-3 py-2 text-base font-bold hover:bg-slate-50">
                 Consultation
               </button>
            </BookingModal>
            
            <div className="pt-4 flex flex-col gap-2 border-t">
              {!isLoggedIn ? (
                <>
                  <AuthModal>
                    <Button variant="outline" className="w-full h-11 font-bold">Sign In</Button>
                  </AuthModal>
                  <Link href="/audit/new" className="w-full">
                    <Button className="w-full h-11 font-bold">Start Audit</Button>
                  </Link>
                </>
              ) : (
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-600 font-bold"
                  onClick={() => setIsLoggedIn(false)}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
