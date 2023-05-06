import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: "ACME/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    id: "termsAndConditions",
    label: "Accept terms and conditions",
    description: "You agree to our Terms of Service and Privacy Policy.",
  },
};
