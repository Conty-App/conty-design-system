import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Badge } from "../badge"

describe("Badge", () => {
  it("renders without errors with default props", () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText("New")).toBeInTheDocument()
  })

  it("sets data-slot='badge'", () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText("New")).toHaveAttribute("data-slot", "badge")
  })

  it.each(["surface", "solid", "soft", "ghost"] as const)(
    "sets data-variant='%s'",
    (variant) => {
      render(<Badge variant={variant}>New</Badge>)
      expect(screen.getByText("New")).toHaveAttribute("data-variant", variant)
    }
  )

  it.each(["purple", "cyan", "orange", "pink", "success", "warning", "danger"] as const)(
    "sets data-color='%s'",
    (color) => {
      render(<Badge color={color}>New</Badge>)
      expect(screen.getByText("New")).toHaveAttribute("data-color", color)
    }
  )

  it.each(["1", "2", "3", "4"] as const)("sets data-size='%s'", (size) => {
    render(<Badge size={size}>New</Badge>)
    expect(screen.getByText("New")).toHaveAttribute("data-size", size)
  })

  it("defaults to variant 'surface' and size '2'", () => {
    render(<Badge>New</Badge>)
    const badge = screen.getByText("New")
    expect(badge).toHaveAttribute("data-variant", "surface")
    expect(badge).toHaveAttribute("data-size", "2")
  })

  it("renders as a child element when asChild=true", () => {
    render(
      <Badge asChild>
        <a href="/destination">Badge Link</a>
      </Badge>
    )
    const link = screen.getByRole("link", { name: "Badge Link" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("data-slot", "badge")
  })
})
