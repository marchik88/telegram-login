import React from "react";
import { Slider } from "../slider";
import { SliderProps } from "@radix-ui/react-slider";

const SliderStories = {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Slider component.",
    },
    defaultValue: {
      control: "array",
      description: "The initial value of the slider.",
      defaultValue: [50],
    },
    min: {
      control: "number",
      description: "The minimum value of the slider.",
      defaultValue: 0,
    },
    max: {
      control: "number",
      description: "The maximum value of the slider.",
      defaultValue: 100,
    },
    step: {
      control: "number",
      description: "The step value for the slider.",
      defaultValue: 1,
    },
  },
};

export default SliderStories;

export const Playground = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>) => (
    <div className="w-full max-w-sm">
      <Slider {...args} />
    </div>
  ),
};
