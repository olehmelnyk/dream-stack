import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Accordion> = {
  title: "ACME/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["single", "multiple"],
      control: "radio",
    },
    items: [
      {
        id: crypto.randomUUID(),
        label: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // type: "single",
    items: [
      {
        id: crypto.randomUUID(),
        label: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
      },
      {
        id: crypto.randomUUID(),
        label: "Is it styled?",
        content:
          "Yes. It comes with default styles that matches the other components' aesthetic.",
      },
      {
        id: crypto.randomUUID(),
        label: "Is it animated?",
        content:
          "Yes. It's animated by default, but you can disable it if you prefer.",
      },
    ],
  },
};
