import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  title: "ACME/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => <Badge {...args}>Badge</Badge>,
};
