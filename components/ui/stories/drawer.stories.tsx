import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer";
import { DialogProps } from "vaul";

const DrawerStories = {
  title: "Components/Drawer",
  component: Drawer,
  subcomponents: {
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
  },
  argTypes: {
    shouldScaleBackground: {
      control: "boolean",
      description: "Determines if the background should scale when the drawer is open.",
    },
    className: {
      control: "text",
      description: "Additional classes for the Drawer component.",
    },
  },
};

export default DrawerStories;

export const Playground = {
  args: {
    shouldScaleBackground: true,
  },
  render: (args: React.JSX.IntrinsicAttributes & DialogProps) => (
    <Drawer {...args}>
      <DrawerTrigger className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a description for the drawer content.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-neutral-500 dark:text-neutral-400">
          Drawer content goes here.
        </div>
        <DrawerFooter>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Confirm
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
