import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: "ACME/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "oleh.melnyk@gmail.com",
    name: "email",
    helperText: "Your email address",
    id: "email",
    type: "email",
  },
};

export const File: Story = {
  args: {
    label: "Attach file",
    name: "file",
    id: "file",
    type: "file",
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    name: "age",
    id: "age",
    type: "number",
    min: 18,
    max: 120,
    step: 1,
  },
};

export const Date: Story = {
  args: {
    label: "Date of Birth",
    name: "dob",
    id: "dob",
    type: "text",
    pattern: "\\d{2}-\\d{2}-\\d{4}",
    placeholder: "DD-MM-YYYY",
  },
};

export const Tel: Story = {
  args: {
    label: "Phone",
    name: "phone",
    id: "phone",
    type: "tel",
    placeholder: "380631215555",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    name: "password",
    id: "password",
    type: "password",
  },
};
