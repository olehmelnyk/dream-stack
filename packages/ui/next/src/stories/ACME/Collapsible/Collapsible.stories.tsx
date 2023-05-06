import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./Collapsible";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Collapsible> = {
  title: "ACME/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    trigger: "Can I use this in my project?",
    content:
      "Yes. Free to use for personal and commercial projects. No attribution required.",
  },
};
