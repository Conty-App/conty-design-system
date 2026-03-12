import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Callout, CalloutDescription, CalloutIcon, CalloutTitle } from "../callout"

describe("Callout", () => {
  it("renders without errors with default props", () => {
    render(<Callout>Content</Callout>)
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("sets data-slot='callout'", () => {
    render(<Callout>Content</Callout>)
    expect(screen.getByText("Content")).toHaveAttribute("data-slot", "callout")
  })

  it.each(["default", "info", "success", "warning", "destructive"] as const)(
    "sets data-variant='%s'",
    (variant) => {
      render(<Callout variant={variant}>Content</Callout>)
      expect(screen.getByText("Content")).toHaveAttribute("data-variant", variant)
    }
  )

  it.each(["sm", "md", "lg"] as const)("sets data-size='%s'", (size) => {
    render(<Callout size={size}>Content</Callout>)
    expect(screen.getByText("Content")).toHaveAttribute("data-size", size)
  })

  it("defaults to variant 'default'", () => {
    render(<Callout>Content</Callout>)
    expect(screen.getByText("Content")).toHaveAttribute("data-variant", "default")
  })
})

describe("CalloutIcon", () => {
  it("renders without errors", () => {
    render(<CalloutIcon>⚠</CalloutIcon>)
    expect(screen.getByText("⚠")).toBeInTheDocument()
  })

  it("sets data-slot='callout-icon'", () => {
    render(<CalloutIcon>⚠</CalloutIcon>)
    expect(screen.getByText("⚠")).toHaveAttribute("data-slot", "callout-icon")
  })

  it("has aria-hidden='true'", () => {
    render(<CalloutIcon>⚠</CalloutIcon>)
    expect(screen.getByText("⚠")).toHaveAttribute("aria-hidden", "true")
  })
})

describe("CalloutTitle", () => {
  it("renders without errors", () => {
    render(<CalloutTitle>Warning</CalloutTitle>)
    expect(screen.getByText("Warning")).toBeInTheDocument()
  })

  it("sets data-slot='callout-title'", () => {
    render(<CalloutTitle>Warning</CalloutTitle>)
    expect(screen.getByText("Warning")).toHaveAttribute("data-slot", "callout-title")
  })

  it("renders as an h5", () => {
    render(<CalloutTitle>Warning</CalloutTitle>)
    expect(screen.getByRole("heading", { level: 5 })).toBeInTheDocument()
  })
})

describe("CalloutDescription", () => {
  it("renders without errors", () => {
    render(<CalloutDescription>Callout description</CalloutDescription>)
    expect(screen.getByText("Callout description")).toBeInTheDocument()
  })

  it("sets data-slot='callout-description'", () => {
    render(<CalloutDescription>Callout description</CalloutDescription>)
    expect(screen.getByText("Callout description")).toHaveAttribute(
      "data-slot",
      "callout-description"
    )
  })
})

describe("Callout full composition", () => {
  it("renders all sub-components together", () => {
    render(
      <Callout variant="warning" size="md">
        <CalloutIcon>⚠</CalloutIcon>
        <CalloutTitle>Important warning</CalloutTitle>
        <CalloutDescription>This is a warning message.</CalloutDescription>
      </Callout>
    )

    const callout = screen.getByText("⚠").closest("[data-slot='callout']")
    expect(callout).toBeInTheDocument()
    expect(callout).toHaveAttribute("data-variant", "warning")
    expect(callout).toHaveAttribute("data-size", "md")
    expect(screen.getByText("Important warning")).toBeInTheDocument()
    expect(screen.getByText("This is a warning message.")).toBeInTheDocument()
  })
})
