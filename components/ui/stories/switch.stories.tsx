import React from "react";
import { Switch } from "@/components/ui/switch";

const SwitchStories = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Switch component.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Specifies whether the switch is checked by default.",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "Disables the switch if true.",
      defaultValue: false,
    },
  },
};

export default SwitchStories;

export const Playground = {
  args: {
    defaultChecked: false,
    disabled: false,
  },
  render: (args: { defaultChecked: boolean; }) => (
    <div className="flex items-center gap-4">
      <Switch {...args} />
      <span>{args.defaultChecked ? "On" : "Off"}</span>
    </div>
  ),
};

export const Disabled = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
  render: (args: { defaultChecked: boolean; }) => <Switch {...args} />,
};
