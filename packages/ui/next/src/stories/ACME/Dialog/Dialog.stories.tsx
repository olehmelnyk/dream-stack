import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { Dialog } from "./Dialog";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Dialog> = {
  title: "ACME/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    trigger: "Open",
    title: "Are you sure absolutely sure?",
    description:
      "This action cannot be undone. Are you sure you want to permanently delete this file from our servers?",
    footer: (
      <>
        <Button variant="outline" label="Cancel" />
        <Button type="submit" label="Confirm" />
      </>
    ),
  },
};
