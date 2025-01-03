import React from "react";
import { Badge, BadgeProps } from "../badge";

const BadgeStories = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The style variant of the badge.",
    },
    className: {
      control: "text",
      description: "Additional classes for the Badge component.",
    },
    children: {
      control: "text",
      description: "Content inside the badge.",
    },
  },
};

export default BadgeStories;

export const Playground = {
  args: {
    variant: "default",
    children: "Default Badge",
  },
  render: (args: React.JSX.IntrinsicAttributes & BadgeProps) =>
    <Badge {...args} />,
};
