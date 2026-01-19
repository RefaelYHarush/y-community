"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "new" | "hot" | "custom";
  color?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", color, children, style, ...props }, ref) => {
    const variants = {
      default: "bg-brand-lime/20 text-brand-lime border-brand-lime/30",
      new: "bg-accent-blue/20 text-accent-blue border-accent-blue/30",
      hot: "bg-accent-red/20 text-accent-red border-accent-red/30",
      custom: "",
    };

    const customStyle =
      variant === "custom" && color
        ? {
            backgroundColor: `${color}20`,
            color: color,
            borderColor: `${color}50`,
          }
        : {};

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border",
          variants[variant],
          className
        )}
        style={{ ...style, ...customStyle }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
export type { BadgeProps };
