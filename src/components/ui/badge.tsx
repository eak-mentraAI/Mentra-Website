import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold font-rounded transition-colors focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-mentra-blue text-off-white hover:bg-mentra-blue/90",
        secondary:
          "border-transparent bg-growth-green text-off-white hover:bg-growth-green/90",
        destructive:
          "border-transparent bg-curiosity-coral text-off-white hover:bg-curiosity-coral/80",
        outline: "text-mentra-blue border border-mentra-blue bg-off-white",
        highlight: "border-transparent bg-grit-gold text-charcoal hover:bg-grit-gold/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
