import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { Button } from "../button"

describe("Button", () => {
  it("renders without errors with default props", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("sets data-slot='button'", () => {
    render(<Button>Test</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-slot", "button")
  })

  it.each(["surface", "solid", "soft", "ghost"] as const)(
    "sets data-variant='%s'",
    (variant) => {
      render(<Button variant={variant}>Test</Button>)
      expect(screen.getByRole("button")).toHaveAttribute("data-variant", variant)
    }
  )

  it.each(["1", "2", "3", "4"] as const)("sets data-size='%s'", (size) => {
    render(<Button size={size}>Test</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-size", size)
  })

  it("defaults to variant 'surface' and size '2'", () => {
    render(<Button>Test</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toHaveAttribute("data-variant", "surface")
    expect(btn).toHaveAttribute("data-size", "2")
  })

  it("is disabled when disabled=true", () => {
    render(<Button disabled>Test</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("sets data-disabled when disabled=true", () => {
    render(<Button disabled>Test</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-disabled", "true")
  })

  it("is disabled when loading=true", () => {
    render(<Button loading>Test</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("sets data-loading when loading=true", () => {
    render(<Button loading>Test</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-loading", "true")
  })

  it("shows a spinner when loading=true", () => {
    render(<Button loading>Test</Button>)
    const spinners = screen.getByRole("button").querySelectorAll("svg")
    expect(spinners.length).toBeGreaterThan(0)
  })

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Test</Button>)
    await userEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Test</Button>)
    await userEvent.click(screen.getByRole("button"))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("renders as a child element when asChild=true", () => {
    render(
      <Button asChild>
        <a href="/destination">Link</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: "Link" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/destination")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})
