import React from "react";
import { Input } from "../input";

const InputStories = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "text",
      description: "Specifies the type of input.",
      defaultValue: "text",
    },
    className: {
      control: "text",
      description: "Additional classes for the Input component.",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field.",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input field.",
    },
  },
};

export default InputStories;

export const Playground = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>) =>
    <Input {...args} className='max-w-40'/>,
};
