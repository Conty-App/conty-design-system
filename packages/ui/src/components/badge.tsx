import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/cn"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border px-2 py-0.5 text-xs font-medium transition-all duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] [&>svg]:size-3 [&>svg]:pointer-events-none outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 overflow-hidden",
  {
    variants: {
      variant: {
        surface:
          "border-[color:var(--button-surface-border)] bg-[var(--button-surface-bg)] text-[var(--button-surface-fg)] shadow-[var(--button-surface-shadow)] [a&]:hover:border-[color:var(--button-surface-hover-border)] [a&]:hover:bg-[var(--button-surface-hover-bg)] [a&]:hover:shadow-sm",
        solid:
          "border-transparent bg-[var(--button-solid-bg)] text-[var(--button-solid-fg)] shadow-[var(--button-solid-shadow)] [a&]:hover:bg-[var(--button-solid-hover-bg)] [a&]:hover:shadow-sm",
        soft:
          "border-transparent bg-[var(--button-soft-bg)] text-[var(--button-soft-fg)] [a&]:hover:bg-[var(--button-soft-hover-bg)] [a&]:hover:shadow-sm",
        ghost:
          "border-transparent bg-[var(--button-ghost-bg)] text-[var(--button-ghost-fg)] [a&]:hover:bg-[var(--button-ghost-hover-bg)] [a&]:hover:shadow-sm"
      },
      color: {
        purple:
          "[--button-surface-bg:var(--badge-purple-surface-bg)] [--button-surface-fg:var(--badge-purple-surface-fg)] [--button-surface-border:var(--badge-purple-surface-border)] [--button-surface-hover-bg:var(--badge-purple-surface-hover-bg)] [--button-surface-hover-border:var(--badge-purple-surface-hover-border)] [--button-solid-bg:var(--badge-purple-solid-bg)] [--button-solid-fg:var(--badge-purple-solid-fg)] [--button-solid-hover-bg:var(--badge-purple-solid-hover-bg)] [--button-soft-bg:var(--badge-purple-soft-bg)] [--button-soft-fg:var(--badge-purple-soft-fg)] [--button-soft-hover-bg:var(--badge-purple-soft-hover-bg)] [--button-ghost-fg:var(--badge-purple-ghost-fg)] [--button-ghost-hover-bg:var(--badge-purple-ghost-hover-bg)]",
        cyan:
          "[--button-surface-bg:var(--badge-cyan-surface-bg)] [--button-surface-fg:var(--badge-cyan-surface-fg)] [--button-surface-border:var(--badge-cyan-surface-border)] [--button-surface-hover-bg:var(--badge-cyan-surface-hover-bg)] [--button-surface-hover-border:var(--badge-cyan-surface-hover-border)] [--button-solid-bg:var(--badge-cyan-solid-bg)] [--button-solid-fg:var(--badge-cyan-solid-fg)] [--button-solid-hover-bg:var(--badge-cyan-solid-hover-bg)] [--button-soft-bg:var(--badge-cyan-soft-bg)] [--button-soft-fg:var(--badge-cyan-soft-fg)] [--button-soft-hover-bg:var(--badge-cyan-soft-hover-bg)] [--button-ghost-fg:var(--badge-cyan-ghost-fg)] [--button-ghost-hover-bg:var(--badge-cyan-ghost-hover-bg)]",
        orange:
          "[--button-surface-bg:var(--badge-orange-surface-bg)] [--button-surface-fg:var(--badge-orange-surface-fg)] [--button-surface-border:var(--badge-orange-surface-border)] [--button-surface-hover-bg:var(--badge-orange-surface-hover-bg)] [--button-surface-hover-border:var(--badge-orange-surface-hover-border)] [--button-solid-bg:var(--badge-orange-solid-bg)] [--button-solid-fg:var(--badge-orange-solid-fg)] [--button-solid-hover-bg:var(--badge-orange-solid-hover-bg)] [--button-soft-bg:var(--badge-orange-soft-bg)] [--button-soft-fg:var(--badge-orange-soft-fg)] [--button-soft-hover-bg:var(--badge-orange-soft-hover-bg)] [--button-ghost-fg:var(--badge-orange-ghost-fg)] [--button-ghost-hover-bg:var(--badge-orange-ghost-hover-bg)]",
        pink:
          "[--button-surface-bg:var(--badge-pink-surface-bg)] [--button-surface-fg:var(--badge-pink-surface-fg)] [--button-surface-border:var(--badge-pink-surface-border)] [--button-surface-hover-bg:var(--badge-pink-surface-hover-bg)] [--button-surface-hover-border:var(--badge-pink-surface-hover-border)] [--button-solid-bg:var(--badge-pink-solid-bg)] [--button-solid-fg:var(--badge-pink-solid-fg)] [--button-solid-hover-bg:var(--badge-pink-solid-hover-bg)] [--button-soft-bg:var(--badge-pink-soft-bg)] [--button-soft-fg:var(--badge-pink-soft-fg)] [--button-soft-hover-bg:var(--badge-pink-soft-hover-bg)] [--button-ghost-fg:var(--badge-pink-ghost-fg)] [--button-ghost-hover-bg:var(--badge-pink-ghost-hover-bg)]",
        success:
          "[--button-surface-bg:var(--badge-success-surface-bg)] [--button-surface-fg:var(--badge-success-surface-fg)] [--button-surface-border:var(--badge-success-surface-border)] [--button-surface-hover-bg:var(--badge-success-surface-hover-bg)] [--button-surface-hover-border:var(--badge-success-surface-hover-border)] [--button-solid-bg:var(--badge-success-solid-bg)] [--button-solid-fg:var(--badge-success-solid-fg)] [--button-solid-hover-bg:var(--badge-success-solid-hover-bg)] [--button-soft-bg:var(--badge-success-soft-bg)] [--button-soft-fg:var(--badge-success-soft-fg)] [--button-soft-hover-bg:var(--badge-success-soft-hover-bg)] [--button-ghost-fg:var(--badge-success-ghost-fg)] [--button-ghost-hover-bg:var(--badge-success-ghost-hover-bg)]",
        warning:
          "[--button-surface-bg:var(--badge-warning2-surface-bg)] [--button-surface-fg:var(--badge-warning2-surface-fg)] [--button-surface-border:var(--badge-warning2-surface-border)] [--button-surface-hover-bg:var(--badge-warning2-surface-hover-bg)] [--button-surface-hover-border:var(--badge-warning2-surface-hover-border)] [--button-solid-bg:var(--badge-warning2-solid-bg)] [--button-solid-fg:var(--badge-warning2-solid-fg)] [--button-solid-hover-bg:var(--badge-warning2-solid-hover-bg)] [--button-soft-bg:var(--badge-warning2-soft-bg)] [--button-soft-fg:var(--badge-warning2-soft-fg)] [--button-soft-hover-bg:var(--badge-warning2-soft-hover-bg)] [--button-ghost-fg:var(--badge-warning2-ghost-fg)] [--button-ghost-hover-bg:var(--badge-warning2-ghost-hover-bg)]",
        danger:
          "[--button-surface-bg:var(--badge-danger-surface-bg)] [--button-surface-fg:var(--badge-danger-surface-fg)] [--button-surface-border:var(--badge-danger-surface-border)] [--button-surface-hover-bg:var(--badge-danger-surface-hover-bg)] [--button-surface-hover-border:var(--badge-danger-surface-hover-border)] [--button-solid-bg:var(--badge-danger-solid-bg)] [--button-solid-fg:var(--badge-danger-solid-fg)] [--button-solid-hover-bg:var(--badge-danger-solid-hover-bg)] [--button-soft-bg:var(--badge-danger-soft-bg)] [--button-soft-fg:var(--badge-danger-soft-fg)] [--button-soft-hover-bg:var(--badge-danger-soft-hover-bg)] [--button-ghost-fg:var(--badge-danger-ghost-fg)] [--button-ghost-hover-bg:var(--badge-danger-ghost-hover-bg)]"
      },
      size: {
        "1": "h-5 px-1.5 text-[10px] [&>svg]:size-2.5",
        "2": "h-6 px-2 text-xs [&>svg]:size-3",
        "3": "h-7 px-2.5 text-sm [&>svg]:size-3.5",
        "4": "h-8 px-3 text-base [&>svg]:size-4"
      }
    },
    defaultVariants: {
      variant: "surface",
      size: "2"
    }
  }
)

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }

function Badge({ className, variant, color, size, asChild = false, ...props }: BadgeProps) {
  const resolvedVariant = variant ?? "surface"
  const resolvedSize = size ?? "2"
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={resolvedVariant}
      data-color={color}
      data-size={resolvedSize}
      className={cn(badgeVariants({ variant: resolvedVariant, color, size: resolvedSize }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
