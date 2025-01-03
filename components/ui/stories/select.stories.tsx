import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from "../select";
import { SelectProps } from "@radix-ui/react-select";

const SelectStories = {
  title: "Components/Select",
  component: Select,
  subcomponents: {
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectSeparator,
    SelectLabel,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Select component.",
    },
  },
};

export default SelectStories;

export const Playground = {
  args: {},
  render: (args: React.JSX.IntrinsicAttributes & SelectProps) => (
    <Select {...args}>
      <SelectTrigger className="w-48">Select an option</SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectSeparator/>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
