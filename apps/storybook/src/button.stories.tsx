import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@conty/ui"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["children", "variant", "size", "disabled", "loading", "asChild"]
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
    disabled: {
      control: "boolean"
    },
    loading: {
      control: "boolean"
    },
    asChild: {
      control: "boolean"
    }
  },
  args: {
    children: "Button",
    disabled: false,
    loading: false
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

function LeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1z"
      />
    </svg>
  )
}

export const Default: Story = {
  args: {}
}

export const AVariantGrid: Story = {
  name: "Variant Grid",
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="surface">Surface</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}

export const Size: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
      <Button size="4">Size 4</Button>
    </div>
  )
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button className="with-icons" variant="surface">
        Surface
        <LeftIcon />
      </Button>
      <Button className="with-icons" variant="solid">
        Solid
        <LeftIcon />
      </Button>
      <Button className="with-icons" variant="soft">
        Soft
        <LeftIcon />
      </Button>
      <Button className="with-icons" variant="ghost">
        Ghost
        <LeftIcon />
      </Button>
    </div>
  )
}

export const WithIconsLoading: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button className="with-icons" variant="surface" loading>
        Surface
        <LeftIcon />
      </Button>
      <Button className="with-icons" variant="solid" loading>
        Solid
        <LeftIcon />
      </Button>
      <Button className="with-icons" variant="soft" loading>
        Soft
        <LeftIcon />
      </Button>
      <Button className="with-icons" variant="ghost" loading>
        Ghost
        <LeftIcon />
      </Button>
    </div>
  )
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="surface" disabled>
        Surface Disabled
      </Button>
      <Button variant="solid" disabled>
        Solid Disabled
      </Button>
      <Button variant="soft" disabled>
        Soft Disabled
      </Button>
      <Button variant="ghost" disabled>
        Ghost Disabled
      </Button>
    </div>
  )
}

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="surface" loading>
        Surface Loading
      </Button>
      <Button variant="solid" loading>
        Solid Loading
      </Button>
      <Button variant="soft" loading>
        Soft Loading
      </Button>
      <Button variant="ghost" loading>
        Ghost Loading
      </Button>
    </div>
  )
}
