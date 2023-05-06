import type { Meta, StoryObj } from "@storybook/react";

import { HoverCard } from "./HoverCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof HoverCard> = {
  title: "ACME/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    trigger: "@nextjs",
    content: "The React Framework – created and maintained by @vercel.",
  },
};
