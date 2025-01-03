import React from "react";
import { Checkbox } from "../checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";

const CheckboxStories = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Checkbox component.",
    },
    disabled: {
      control: "boolean",
      description: "Disable the checkbox.",
    },
    checked: {
      control: "boolean",
      description: "Controlled checked state of the checkbox.",
    },
  },
};

export default CheckboxStories;

export const CheckboxPlayground = {
  args: {},
  render: (args: React.JSX.IntrinsicAttributes & Omit<CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>) =>
    <Checkbox {...args} />,
};
