import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@conty/ui"

const StoryGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-3">
      {children}
    </div>
  )
}

const VARIANTS = ["surface", "solid", "soft", "ghost"] as const;
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

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
    <StoryGrid>
      {VARIANTS.map((v) => (
        <Button key={v} variant={v}>
          {capitalize(v)}
        </Button>
      ))}
    </StoryGrid>
  )
}

export const Size: Story = {
  render: () => (
    <StoryGrid>
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
      <Button size="4">Size 4</Button>
    </StoryGrid>
  )
}

export const WithIcons: Story = {
  render: () => (
    <StoryGrid>
      {VARIANTS.map((v) => (
        <Button key={v} className="with-icons" variant={v}>
          {capitalize(v)}
          <LeftIcon />
        </Button>
      ))}
    </StoryGrid>
  )
}

export const WithIconsLoading: Story = {
  render: () => (
    <StoryGrid>
      {VARIANTS.map((v) => (
        <Button key={v} className="with-icons" variant={v} loading>
          {capitalize(v)}
          <LeftIcon />
        </Button>
      ))}
    </StoryGrid>
  )
}

export const Disabled: Story = {
  render: () => (
    <StoryGrid>
      {VARIANTS.map((v) => (
        <Button key={v} variant={v} disabled>
          {capitalize(v)} Disabled
        </Button>
      ))}
    </StoryGrid>
  )
}

export const Loading: Story = {
  render: () => (
    <StoryGrid>
      {VARIANTS.map((v) => (
        <Button key={v} variant={v} loading>
          {capitalize(v)} Loading
        </Button>
      ))}
    </StoryGrid>
  )
}
