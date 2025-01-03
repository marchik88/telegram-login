import React from "react";
import { Calendar } from "../calendar";
import {
  DayPickerDefaultProps,
  DayPickerMultipleProps,
  DayPickerRangeProps,
  DayPickerSingleProps
} from "react-day-picker";

const CalendarStories = {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    showOutsideDays: {
      control: "boolean",
      description: "Show days outside the current month.",
    },
    className: {
      control: "text",
      description: "Additional classes for the Calendar component.",
    },
  },
};

export default CalendarStories;

export const Playground = {
  args: {},
  render: (args: React.JSX.IntrinsicAttributes & (DayPickerDefaultProps | DayPickerSingleProps | DayPickerMultipleProps | DayPickerRangeProps)) => (
    <Calendar {...args} className="max-w-lg"/>
  ),
};
