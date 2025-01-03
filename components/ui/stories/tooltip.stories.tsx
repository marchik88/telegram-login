import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../tooltip";
import { TooltipContentProps } from "@radix-ui/react-tooltip";

const TooltipStories = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the TooltipContent.",
    },
    sideOffset: {
      control: "number",
      description: "Offset from the trigger element.",
      defaultValue: 4,
    },
  },
};

export default TooltipStories;

export const Default = {
  args: {
    sideOffset: 4,
    className: "",
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md">Hover
            me
          </button>
        </TooltipTrigger>
        <TooltipContent {...args}>Tooltip Content</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
