import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Avatar> = {
  title: "ACME/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AvatarImage: Story = {
  args: {
    image: "https://github.com/olehmelnyk.png",
    fallback: "OM",
  },
};

export const Fallback: Story = {
  args: {
    image: "",
    fallback: "OM",
  },
};
