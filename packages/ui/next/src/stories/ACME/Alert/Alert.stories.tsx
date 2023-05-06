import type { Meta, StoryObj } from "@storybook/react";
import { Info, XCircle } from "lucide-react";

import { Alert } from "./Alert";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: "ACME/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    icon: Info,
    title: "Heads up!",
    description: "You can add components to your app using the cli.",
  },
};

export const Error: Story = {
  args: {
    variant: "destructive",
    icon: XCircle,
    title: "Error",
    description: "Your session has expired. Please log in again.",
  },
};
