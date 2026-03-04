import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/cn"

const calloutVariants = cva(
  "relative w-full rounded-2xl border grid [--callout-link-fg:var(--callout-info-link-fg)] [--callout-link-hover-fg:var(--callout-info-link-hover-fg)]",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--callout-info-bg)] text-[var(--callout-info-fg)] [&>[data-slot=callout-icon]]:text-[var(--callout-info-fg)] [--callout-link-fg:var(--callout-info-link-fg)] [--callout-link-hover-fg:var(--callout-info-link-hover-fg)]",
        info: "border-transparent bg-[var(--callout-info-bg)] text-[var(--callout-info-fg)] [&>[data-slot=callout-icon]]:text-[var(--callout-info-fg)] [--callout-link-fg:var(--callout-info-link-fg)] [--callout-link-hover-fg:var(--callout-info-link-hover-fg)]",
        success:
          "border-transparent bg-[var(--callout-success-bg)] text-[var(--callout-success-fg)] [&>[data-slot=callout-icon]]:text-[var(--callout-success-fg)] [--callout-link-fg:var(--callout-success-link-fg)] [--callout-link-hover-fg:var(--callout-success-link-hover-fg)]",
        warning:
          "border-transparent bg-[var(--callout-warning-bg)] text-[var(--callout-warning-fg)] [&>[data-slot=callout-icon]]:text-[var(--callout-warning-fg)] [--callout-link-fg:var(--callout-warning-link-fg)] [--callout-link-hover-fg:var(--callout-warning-link-hover-fg)]",
        destructive:
          "border-transparent bg-[var(--callout-destructive-bg)] text-[var(--callout-destructive-fg)] [&>[data-slot=callout-icon]]:text-[var(--callout-destructive-fg)] [--callout-link-fg:var(--callout-destructive-link-fg)] [--callout-link-hover-fg:var(--callout-destructive-link-hover-fg)]"
      },
      size: {
        sm: "px-4 py-3 has-[data-slot=callout-description]:gap-1 [&>[data-slot=callout-icon]]:absolute [&>[data-slot=callout-icon]]:left-4 [&>[data-slot=callout-icon]]:top-3.5 [&>[data-slot=callout-icon]]:size-4 [&>[data-slot=callout-icon]~*]:pl-7 [&_[data-slot=callout-description]]:text-xs",
        md: "px-5 py-4 has-[data-slot=callout-description]:gap-1.5 [&>[data-slot=callout-icon]]:absolute [&>[data-slot=callout-icon]]:left-5 [&>[data-slot=callout-icon]]:top-4.5 [&>[data-slot=callout-icon]]:size-5 [&>[data-slot=callout-icon]~*]:pl-8 [&_[data-slot=callout-description]]:text-sm",
        lg: "px-6 py-5 has-[data-slot=callout-description]:gap-2 [&>[data-slot=callout-icon]]:absolute [&>[data-slot=callout-icon]]:left-6 [&>[data-slot=callout-icon]]:top-5.5 [&>[data-slot=callout-icon]]:size-6 [&>[data-slot=callout-icon]~*]:pl-9 [&_[data-slot=callout-description]]:text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

type CalloutProps = React.ComponentProps<"div"> & VariantProps<typeof calloutVariants>

function Callout({ className, variant, size, ...props }: CalloutProps) {
  const resolvedVariant = variant ?? "default"

  return (
    <div
      data-slot="callout"
      data-variant={resolvedVariant}
      data-size={size}
      className={cn(calloutVariants({ variant: resolvedVariant, size }), className)}
      {...props}
    />
  )
}

function CalloutIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="callout-icon"
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center text-current [&_svg]:size-full",
        className
      )}
      {...props}
    />
  )
}

function CalloutTitle({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      data-slot="callout-title"
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function CalloutDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="callout-description"
      className={cn(
        "leading-relaxed text-current [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-[var(--callout-link-fg)] hover:[&_a]:text-[var(--callout-link-hover-fg)]",
        className
      )}
      {...props}
    />
  )
}

export { Callout, CalloutDescription, CalloutIcon, CalloutTitle, calloutVariants }
