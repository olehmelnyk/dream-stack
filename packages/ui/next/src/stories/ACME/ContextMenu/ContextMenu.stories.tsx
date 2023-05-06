import type { Meta, StoryObj } from "@storybook/react";

import { ContextMenu } from "./ContextMenu";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContextMenu> = {
  title: "ACME/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    trigger: "Right click",
    menuItems: ["Profile", "Billing", "Team", "Subscription"],
  },
};
