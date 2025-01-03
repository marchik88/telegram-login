import React from "react";
import { Label } from "../label";
import { LabelProps } from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";
import { Checkbox } from "@/components/ui/checkbox";

const LabelStories = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Label component.",
    },
    htmlFor: {
      control: "text",
      description: "The id of the input the label is associated with.",
    },
    children: {
      control: "text",
      description: "Content of the label.",
    },
  },
};

export default LabelStories;

export const Playground = {
  args: {
    htmlFor: "input-id",
    children: "Label Text",
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>) => (
    <div className="flex items-center space-x-2">
      <Checkbox id={args.htmlFor}/>
      <Label {...args} />
    </div>
  ),
};
