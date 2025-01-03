import React from "react";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "../popover";
import { PopoverContentProps } from "@radix-ui/react-popover";

const PopoverStories = {
  title: "Components/Popover",
  component: Popover,
  subcomponents: {
    PopoverTrigger,
    PopoverContent,
    PopoverAnchor,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Popover component.",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the popover content.",
    },
    sideOffset: {
      control: "number",
      description: "Offset of the popover content from the trigger.",
    },
  },
};

export default PopoverStories;

export const Playground = {
  args: {
    align: "center",
    sideOffset: 4,
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>) => (
    <Popover>
      <PopoverTrigger className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Popover
      </PopoverTrigger>
      <PopoverContent {...args}>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          This is the popover content.
        </div>
      </PopoverContent>
    </Popover>
  ),
};
