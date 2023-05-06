import Image from "next/image";
import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "./AspectRatio";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AspectRatio> = {
  title: "ACME/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AspectRatio_16x9: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <Image
          src="https://unsplash.it/640/425"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};

export const AspectRatio_4x3: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <Image
          src="https://unsplash.it/640/425"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};

export const AspectRatio_3x2: Story = {
  args: {
    ratio: 3 / 2,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <Image
          src="https://unsplash.it/640/425"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};

export const AspectRatio_1x1: Story = {
  args: {
    ratio: 1 / 1,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <Image
          src="https://unsplash.it/640/425"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};

export const AspectRatio_21x9: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <Image
          src="https://unsplash.it/640/425"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
      </AspectRatio>
    </div>
  ),
};
