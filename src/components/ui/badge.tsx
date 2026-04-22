import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[var(--bg-3)] text-[var(--text)] border border-[var(--border)]",
        accent: "bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--accent-border)]",
        success: "bg-[rgba(16,185,129,0.12)] text-[var(--success)] border border-[rgba(16,185,129,0.3)]",
        destructive: "bg-[rgba(239,68,68,0.12)] text-[var(--red)] border border-[rgba(239,68,68,0.3)]",
        green: "bg-[rgba(37,211,102,0.12)] text-[var(--green)] border border-[rgba(37,211,102,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
