import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/cn"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] data-[disabled=true]:cursor-not-allowed data-[loading=true]:cursor-not-allowed data-[disabled=true]:bg-[var(--button-disabled-bg)] data-[disabled=true]:text-[var(--button-disabled-fg)] data-[disabled=true]:font-normal data-[disabled=true]:border-[color:var(--button-disabled-border)] data-[disabled=true]:ring-0 data-[disabled=true]:shadow-none data-[loading=true]:active:scale-100 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden active:scale-[0.98]",
  {
    variants: {
      variant: {
        surface:
          "border border-[color:var(--button-surface-border)] bg-[var(--button-surface-bg)] text-[var(--button-surface-fg)] shadow-[var(--button-surface-shadow)] hover:border-[color:var(--button-surface-hover-border)] hover:bg-[var(--button-surface-hover-bg)] data-[loading=true]:hover:border-[color:var(--button-surface-border)] data-[loading=true]:hover:bg-[var(--button-surface-bg)]",
        solid:
          "bg-[var(--button-solid-bg)] text-[var(--button-solid-fg)] [text-shadow:none] hover:bg-[var(--button-solid-hover-bg)] data-[loading=true]:hover:bg-[var(--button-solid-bg)] shadow-[var(--button-solid-shadow)]",
        soft:
          "bg-[var(--button-soft-bg)] text-[var(--button-soft-fg)] hover:bg-[var(--button-soft-hover-bg)] data-[loading=true]:hover:bg-[var(--button-soft-bg)]",
        ghost:
          "bg-[var(--button-ghost-bg)] text-[var(--button-ghost-fg)] hover:bg-[var(--button-ghost-hover-bg)] data-[loading=true]:hover:bg-[var(--button-ghost-bg)]"
      },
      size: {
        "1": "h-7 rounded-md gap-1 px-2 text-xs has-[>svg]:px-1.5",
        "2": "h-9 px-3 py-2 text-sm has-[>svg]:px-2.5",
        "3": "h-10 rounded-md px-4 text-base has-[>svg]:px-3",
        "4": "h-11 rounded-md px-5 text-lg has-[>svg]:px-4"
      }
    },
    defaultVariants: {
      variant: "surface",
      size: "2"
    }
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  disabled = false,
  loading = false,
  type,
  onClick,
  onKeyDown,
  tabIndex,
  children,
  "aria-busy": ariaBusy,
  ...props
}: ButtonProps) {
  const resolvedVariant = variant ?? "surface"
  const resolvedSize = size ?? "2"
  const hasWithIconsClass =
    typeof className === "string" && className.split(/\s+/).includes("with-icons")
  const withIconsLoading = loading && hasWithIconsClass
  const isUnavailable = disabled || loading
  const disabledState = disabled ? "true" : undefined
  const isBusy = loading || ariaBusy

  const content = (
    <>
      <span
        className={cn(
          "inline-flex items-center justify-center",
          loading && !withIconsLoading && "opacity-0"
        )}
      >
        {children}
        {withIconsLoading ? (
          <svg
            viewBox="0 0 24 24"
            className="with-icons-spinner size-4 animate-spin"
            role="presentation"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              className="opacity-25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7z"
            />
          </svg>
        ) : null}
      </span>
      {loading && !withIconsLoading ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4 animate-spin"
            role="presentation"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              className="opacity-25"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7z"
            />
          </svg>
        </span>
      ) : null}
    </>
  )

  const handleAsChildClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isUnavailable) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onClick?.(event as React.MouseEvent<HTMLButtonElement>)
  }

  const handleAsChildKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isUnavailable && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault()
      event.stopPropagation()
      return
    }
    onKeyDown?.(event as React.KeyboardEvent<HTMLButtonElement>)
  }

  if (asChild) {
    return (
      <Slot
        data-slot="button"
        data-variant={resolvedVariant}
        data-size={resolvedSize}
        className={cn(buttonVariants({ variant: resolvedVariant, size: resolvedSize, className }))}
        aria-disabled={isUnavailable || undefined}
        aria-busy={isBusy || undefined}
        data-disabled={disabledState}
        data-loading={loading ? "true" : undefined}
        tabIndex={isUnavailable ? -1 : tabIndex}
        onClick={handleAsChildClick}
        onKeyDown={handleAsChildKeyDown}
        {...props}
      >
        {content}
      </Slot>
    )
  }

  return (
    <button
      data-slot="button"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      className={cn(buttonVariants({ variant: resolvedVariant, size: resolvedSize, className }))}
      type={type ?? "button"}
      disabled={isUnavailable}
      aria-busy={isBusy || undefined}
      data-disabled={disabledState}
      data-loading={loading ? "true" : undefined}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      {...props}
    >
      {content}
    </button>
  )
}

export { Button, buttonVariants }
