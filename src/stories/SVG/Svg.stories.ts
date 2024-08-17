import type { Meta, StoryObj } from "@storybook/react";
import SVG from "./SVG";

const meta = {
  title: "SVG",
  component: SVG,
} satisfies Meta<typeof SVG>;

export default meta;

type Story = StoryObj<typeof SVG>;

export const Default: Story = {};
