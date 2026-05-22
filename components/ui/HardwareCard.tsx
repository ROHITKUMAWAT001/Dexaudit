import React from "react";
import { cn } from "@/lib/utils";

interface HardwareCardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  withScrews?: boolean;
  as?: React.ElementType;
}

export const HardwareCard = ({
  children,
  className,
  elevated = false,
  withScrews = true,
  as: Component = "div",
}: HardwareCardProps) => {
  return (
    <Component
      className={cn(
        "relative p-6 md:p-8 rounded-xl bg-chassis transition-all duration-300 border border-white/20 overflow-hidden",
        elevated ? "shadow-floating hover:-translate-y-1" : "shadow-card",
        className
      )}
    >
      {/* Light Hotspot (Top-Left Lighting Reinforcement) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Corner Screws */}
      {withScrews && (
        <>
          <div className="absolute top-3 left-3 md:top-4 md:left-4 screw-head opacity-40" />
          <div className="absolute top-3 right-3 md:top-4 md:right-4 screw-head opacity-40" />
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 screw-head opacity-40" />
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 screw-head opacity-40" />
        </>
      )}

      {/* Decorative Vent Slots */}
      <div className="absolute top-4 right-12 flex gap-1 opacity-20 hidden sm:flex">
        <div className="w-1 h-3 rounded-full bg-recessed shadow-recessed" />
        <div className="w-1 h-3 rounded-full bg-recessed shadow-recessed" />
        <div className="w-1 h-3 rounded-full bg-recessed shadow-recessed" />
      </div>

      <div className="relative z-10">{children}</div>
    </Component>
  );
};
