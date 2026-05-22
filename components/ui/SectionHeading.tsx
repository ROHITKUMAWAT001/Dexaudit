import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12 md:mb-16 lg:mb-20",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-industrial-dark uppercase text-embossed max-w-2xl leading-[1.1] md:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base md:text-lg text-industrial-muted font-medium leading-relaxed px-4 md:px-0">
          {subtitle}
        </p>
      )}
      
      {/* Decorative mechanical underline (center only) */}
      {align === "center" && (
        <div className="flex gap-1 mt-4">
           <div className="w-8 h-1 rounded-full bg-accent shadow-led" />
           <div className="w-2 h-1 rounded-full bg-industrial-muted/20" />
           <div className="w-2 h-1 rounded-full bg-industrial-muted/20" />
        </div>
      )}
    </div>
  );
};
