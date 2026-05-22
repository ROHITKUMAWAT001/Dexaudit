import React from "react";
import { cn } from "@/lib/utils";

interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  as?: React.ElementType;
}

export const TactileButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Component = "button",
  ...props
}: TactileButtonProps) => {
  const variants = {
    primary:
      "bg-accent text-accent-foreground shadow-floating hover:brightness-110 active:shadow-pressed",
    secondary:
      "bg-chassis text-industrial-dark shadow-card hover:text-accent active:shadow-pressed",
    ghost:
      "bg-transparent text-industrial-muted hover:bg-recessed/20 hover:text-industrial-dark",
    danger:
      "bg-red-500 text-white shadow-floating hover:bg-red-600 active:shadow-pressed",
    success:
      "bg-green-500 text-white shadow-floating hover:bg-green-600 active:shadow-pressed",
  };

  const sizes = {
    sm: "h-10 px-4 text-xs",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
    xl: "h-16 px-10 text-lg",
  };

  return (
    <Component
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-wider transition-all duration-150 mechanical-bounce active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Pressed Lighting Inversion Overlay */}
      <div className="absolute inset-0 rounded-lg opacity-0 active:opacity-10 bg-black pointer-events-none transition-opacity" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
