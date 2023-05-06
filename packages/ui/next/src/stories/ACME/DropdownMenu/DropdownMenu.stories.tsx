import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu } from "./DropdownMenu";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DropdownMenu> = {
  title: "ACME/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    trigger: <button>Open</button>,
    label: "My Account",
    items: ["Profile", "Billing", "Team", "Subscription"],
  },
};

// TODO: add examples for checkbox and radio buttons from shadcn: https://ui.shadcn.com/docs/components/dropdown-menu
