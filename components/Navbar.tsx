"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { BookingModal } from "@/components/BookingModal";
import { Menu, X, Terminal, User, LogOut, Settings, CreditCard, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getUser, logout } from "@/lib/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState<any>(null);
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Fetch user session on mount and route changes
  React.useEffect(() => {
    async function checkUser() {
      const currentUser = await getUser();
      setUser(currentUser);
      setIsInitialLoading(false);
    }
    checkUser();
  }, [pathname]);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      setUser(null);
      toast.success("Logged out successfully");
      router.push("/");
    }
  };

  // Close menu when navigating
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight">DexAudit</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  {/* Hover Underline */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  
                  {/* Active Underline (Framer Motion) */}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <BookingModal>
                <button className="group relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  Consultation
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </BookingModal>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-4 md:flex">
            {isInitialLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-slate-300" />
            ) : !user ? (
              <>
                <AuthModal>
                  <Button variant="ghost" size="sm" className="font-bold">
                    Sign In
                  </Button>
                </AuthModal>
                <Link href="/audit/new">
                  <Button size="sm" className="font-bold shadow-sm">
                    Start Audit
                  </Button>
                </Link>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 overflow-hidden rounded-full border bg-slate-100 p-0 hover:bg-slate-200 transition-colors"
                  >
                    <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-bold text-xs uppercase">
                      {user.email?.charAt(0)}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold leading-none">Verified Auditor</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
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
                    className="cursor-pointer font-bold text-red-600 focus:text-red-600"
                    onClick={handleLogout}
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
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative z-[60] overflow-hidden border-b bg-background md:hidden"
          >
            <div className="space-y-3 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-bold hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <BookingModal>
                <button className="w-full rounded-md px-3 py-2 text-left text-base font-bold hover:bg-slate-50">
                  Consultation
                </button>
              </BookingModal>

              <div className="flex flex-col gap-2 border-t pt-4">
                {isInitialLoading ? (
                  <div className="flex justify-center p-2">
                    <Loader2 className="h-5 w-5 animate-spin text-slate-300" />
                  </div>
                ) : !user ? (
                  <>
                    <AuthModal onOpenChange={(open) => { if (open) setIsOpen(false); }}>
                      <Button variant="outline" className="h-11 w-full font-bold">
                        Sign In
                      </Button>
                    </AuthModal>
                    <Link href="/audit/new" className="w-full" onClick={() => setIsOpen(false)}>
                      <Button className="h-11 w-full font-bold">Start Audit</Button>
                    </Link>
                  </>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 mb-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                        {user.email?.charAt(0)}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-900 truncate">{user.email}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-start font-bold text-red-600 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
