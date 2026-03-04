import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@conty/ui"

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
      options: ["surface", "solid", "soft", "ghost"]
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4"]
    },
    color: {
      control: "select",
      options: ["purple", "cyan", "orange", "pink", "success", "warning", "danger"]
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
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="surface">Surface</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}

export const Color: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge color="purple">Badge</Badge>
      <Badge color="cyan">Badge</Badge>
      <Badge color="orange">Badge</Badge>
      <Badge color="pink">Badge</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
    </div>
  )
}

export const Size: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="1">Size 1</Badge>
      <Badge size="2">Size 2</Badge>
      <Badge size="3">Size 3</Badge>
      <Badge size="4">Size 4</Badge>
    </div>
  )
}

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge asChild variant="surface">
        <a href="#" onClick={(event) => event.preventDefault()}>
          Surface Link
        </a>
      </Badge>
      <Badge asChild variant="solid">
        <a href="#" onClick={(event) => event.preventDefault()}>
          Solid Link
        </a>
      </Badge>
      <Badge asChild variant="ghost">
        <a href="#" onClick={(event) => event.preventDefault()}>
          Ghost Link
        </a>
      </Badge>
    </div>
  )
}
