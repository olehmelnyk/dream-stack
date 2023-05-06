import type { Meta, StoryObj } from "@storybook/react";

import { DateRangePicker } from "./DatePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DateRangePicker> = {
  title: "ACME/DatePicker",
  component: DateRangePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Range: Story = {};
