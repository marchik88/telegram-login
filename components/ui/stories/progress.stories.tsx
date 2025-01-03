import React from "react";
import { Progress } from "../progress";
import { ProgressProps } from "@radix-ui/react-progress";

const ProgressStories = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Progress component.",
    },
    value: {
      control: "number",
      description: "Current value of the progress indicator.",
      defaultValue: 50,
    },
  },
};

export default ProgressStories;

export const Playground = {
  args: {
    value: 50,
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>) => (
    <div className="w-full max-w-sm">
      <Progress {...args} />
    </div>
  ),
};
