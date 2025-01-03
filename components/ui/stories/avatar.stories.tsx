import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { AvatarProps } from "@radix-ui/react-avatar";

const AvatarStories = {
  title: "Components/Avatar",
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
  argTypes: {
    children: {
      control: "text",
      description: "Content inside the avatar.",
    },
    className: {
      control: "text",
      description: "Additional classes for the Avatar component.",
    },
  },
};

export default AvatarStories;

export const Playground = {
  args: {},
  render: (args: React.JSX.IntrinsicAttributes & Omit<AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>) => (
    <Avatar {...args}>
      <AvatarImage src="https://via.placeholder.com/150" alt="Avatar"/>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};
