import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  InformationCircleIcon
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Callout, CalloutDescription, CalloutIcon } from "@conty/ui"

const meta = {
  title: "Components/Callout",
  component: Callout,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["variant", "size"]
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
  }
} satisfies Meta<typeof Callout>

export default meta

type Story = StoryObj<typeof meta>

function SemanticCallouts() {
  return (
    <>
      <Callout variant="info">
        <CalloutIcon>
          <HugeiconsIcon icon={InformationCircleIcon} size={20} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          A new Frosted-UI update is available and ready to install.{" "}
          <a href="#" onClick={(event) => event.preventDefault()}>
            Learn what changed
          </a>
          .
        </CalloutDescription>
      </Callout>
      <Callout variant="success">
        <CalloutIcon>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          Your changes were saved successfully and synced to the cloud.{" "}
          <a href="#" onClick={(event) => event.preventDefault()}>
            View details
          </a>
          .
        </CalloutDescription>
      </Callout>
      <Callout variant="warning">
        <CalloutIcon>
          <HugeiconsIcon icon={Alert02Icon} size={20} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          Your session will expire soon. Save your work to avoid losing data.{" "}
          <a href="#" onClick={(event) => event.preventDefault()}>
            Extend session
          </a>
          .
        </CalloutDescription>
      </Callout>
      <Callout variant="destructive">
        <CalloutIcon>
          <HugeiconsIcon icon={Alert02Icon} size={20} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          We could not complete your request. Please check your data and try again.{" "}
          <a href="#" onClick={(event) => event.preventDefault()}>
            Read troubleshooting tips
          </a>
          .
        </CalloutDescription>
      </Callout>
    </>
  )
}

export const Default: Story = {
  render: (args) => (
    <Callout {...args} className="max-w-md">
      <CalloutIcon>
        <HugeiconsIcon icon={InformationCircleIcon} size={20} strokeWidth={1.8} />
      </CalloutIcon>
      <CalloutDescription>
        You will need to upgrade to the{" "}
        <a href="#" onClick={(event) => event.preventDefault()}>
          newest Frosted-UI
        </a>{" "}
        version now.
      </CalloutDescription>
    </Callout>
  )
}

export const Destructive: Story = {
  args: {
    variant: "destructive"
  },
  render: (args) => (
    <Callout {...args} className="max-w-md">
      <CalloutIcon>
        <HugeiconsIcon icon={InformationCircleIcon} size={20} strokeWidth={1.8} />
      </CalloutIcon>
      <CalloutDescription>
        We could not complete your request. Please check your data and try again.
      </CalloutDescription>
    </Callout>
  )
}

export const SemanticColors: Story = {
  render: () => (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <SemanticCallouts />
    </div>
  )
}

export const Sizes: Story = {
  name: "Size Scale",
  render: () => (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      <Callout size="sm">
        <CalloutIcon>
          <HugeiconsIcon icon={InformationCircleIcon} size={16} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          Small callout for compact contexts and supporting messages.
        </CalloutDescription>
      </Callout>
      <Callout size="md">
        <CalloutIcon>
          <HugeiconsIcon icon={InformationCircleIcon} size={20} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          Medium callout as the default option for most product screens.
        </CalloutDescription>
      </Callout>
      <Callout size="lg">
        <CalloutIcon>
          <HugeiconsIcon icon={InformationCircleIcon} size={24} strokeWidth={1.8} />
        </CalloutIcon>
        <CalloutDescription>
          Large callout for stronger emphasis in onboarding or key updates.
        </CalloutDescription>
      </Callout>
    </div>
  )
}
