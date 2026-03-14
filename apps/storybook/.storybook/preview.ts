import type { Preview } from "@storybook/react"

import "../src/index.css"

const preview: Preview = {
  globalTypes: {
    buttonTheme: {
      name: "Button Theme",
      description: "Preview button colors without changing canvas theme",
      defaultValue: "auto",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "auto", title: "Button: Auto" },
          { value: "light", title: "Button: Light" },
          { value: "dark", title: "Button: Dark" }
        ]
      }
    }
  },
  decorators: [
    (Story, context) => {
      if (typeof document !== "undefined") {
        const theme = context.globals.buttonTheme
        if (theme === "auto") {
          delete document.documentElement.dataset.buttonTheme
        } else {
          document.documentElement.dataset.buttonTheme = theme
        }
      }
      return Story()
    }
  ],
  parameters: {
    options: {
      storySort: {
        order: ["Components", ["Button", "Callout", "Badge"]]
      }
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    layout: "centered",

    a11y: { test: "error" }
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
  }
}

export default preview
