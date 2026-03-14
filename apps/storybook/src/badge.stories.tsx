import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@conty/ui"

const StoryGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {children}
    </div>
  )
}

const VARIANTS = ["surface", "solid", "soft", "ghost"] as const
const SIZES = ["1", "2", "3", "4"] as const
const COLORS = ["purple", "cyan", "orange", "pink", "success", "warning", "danger"] as const
const LINK_VARIANTS = ["surface", "solid", "ghost"] as const

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
const preventDefaultClick = (event: React.MouseEvent) => event.preventDefault()

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["children", "variant", "color", "size", "asChild"]
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: [...VARIANTS]
    },
    size: {
      control: "select",
      options: [...SIZES]
    },
    color: {
      control: "select",
      options: [...COLORS]
    },
    asChild: {
      control: "boolean"
    }
  },
  args: {
    children: "Badge"
  }
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AVariantGrid: Story = {
  name: "Variant Grid",
  render: () => (
    <StoryGrid>
      {VARIANTS.map((v) => (
        <Badge key={v} variant={v}>{capitalize(v)}</Badge>
      ))}
    </StoryGrid>
  )
}

export const Color: Story = {
  render: () => (
    <StoryGrid>
      {COLORS.map((c) => (
        <Badge key={c} color={c}>{capitalize(c)}</Badge>
      ))}
    </StoryGrid>
  )
}

export const Size: Story = {
  render: () => (
    <StoryGrid>
      {SIZES.map((s) => (
        <Badge key={s} size={s}>Size {s}</Badge>
      ))}
    </StoryGrid>
  )
}

export const AsLink: Story = {
  render: () => (
    <StoryGrid>
      {LINK_VARIANTS.map((v) => (
        <Badge key={v} asChild variant={v}>
          <a href="#" onClick={preventDefaultClick}>
            {capitalize(v)} Link
          </a>
        </Badge>
      ))}
    </StoryGrid>
  )
}
