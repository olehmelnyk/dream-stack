import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "./DatePicker";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DatePicker> = {
  title: "ACME/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Default: Story = {
//   args: {
//     mode: "default",
//   },
// };

export const Single: Story = {
  args: {
    mode: "single",
  },
};

// FIXME: this example does not work
export const Multiple: Story = {
  args: {
    mode: "multiple",
  },
};
