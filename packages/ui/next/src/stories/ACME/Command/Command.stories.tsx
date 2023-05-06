import type { Meta, StoryObj } from "@storybook/react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import { CommandShortcut } from "~/shadcn/components/command";
import { Command } from "./Command";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Command> = {
  title: "ACME/Command",
  component: Command,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Command>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    commands: [
      {
        label: "Suggestions",
        items: [
          <>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </>,
          <>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </>,
          <>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </>,
        ],
      },
      {
        label: "Settings",
        items: [
          <>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </>,
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </>,
          <>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </>,
        ],
      },
    ],
  },
};
