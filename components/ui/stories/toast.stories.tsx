import React from "react";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "../toast";
import { ToastProps } from "@radix-ui/react-toast";
import { VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";

const ToastStories = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The variant style of the Toast component.",
      defaultValue: "default",
    },
    children: {
      control: "text",
      description: "Content inside the Toast component.",
      defaultValue: "This is a toast message.",
    },
  },
};

export default ToastStories;

export const Playground = {
  args: {
    variant: "default",
    children: (
      <>
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription>This is the toast description.</ToastDescription>
        <ToastClose/>
      </>
    ),
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
  } & ClassProp) | undefined) => string> & React.RefAttributes<HTMLLIElement>) => (
    <ToastProvider>
      <Toast {...args} />
      <ToastViewport/>
    </ToastProvider>
  ),
};

export const WithAction = {
  args: {
    variant: "destructive",
    children: (
      <>
        <ToastTitle>Action Toast</ToastTitle>
        <ToastDescription>Do you want to proceed with this
          action?</ToastDescription>
        <ToastAction asChild altText='Alt text for toast'>
          <button className="text-red-600">Undo</button>
        </ToastAction>
        <ToastClose/>
      </>
    ),
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
  } & ClassProp) | undefined) => string> & React.RefAttributes<HTMLLIElement>) => (
    <ToastProvider>
      <Toast {...args} />
      <ToastViewport/>
    </ToastProvider>
  ),
};
