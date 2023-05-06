import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./AlertDialog";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AlertDialog> = {
  title: "ACME/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Are you sure absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    trigger: "Open",
    cancel: "Cancel",
    action: "Continue",
  },
};
