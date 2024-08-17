import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta = {
  title: "Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {};
