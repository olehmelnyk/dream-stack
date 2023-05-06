import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "lucide-react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "ACME/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    label: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    label: "Link",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    label: "Destructive",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost",
  },
};

export const StartIcon: Story = {
  args: {
    startIcon: Mail,
    label: "Button",
  },
};

export const IconButton: Story = {
  args: {
    variant: "ghost",
    startIcon: Mail,
  },
};

export const EndIcon: Story = {
  args: {
    endIcon: Mail,
    label: "Button",
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    label: "Button",
  },
};
