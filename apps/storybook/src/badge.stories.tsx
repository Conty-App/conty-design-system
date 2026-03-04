import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@conty/ui"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge"
  }
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline"
  }
}
