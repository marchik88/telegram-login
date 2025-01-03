import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";

const SheetStories = {
  title: "Components/Sheet",
  component: Sheet,
  subcomponents: {
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Sheet component.",
    },
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "The side from which the sheet will appear.",
    },
  },
};

export default SheetStories;

export const Playground = {
  args: {
    side: "right",
  },
  render: (args: {
    side: "top" | "bottom" | "left" | "right" | null | undefined
  }) => (
    <Sheet>
      <SheetTrigger className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Sheet
      </SheetTrigger>
      <SheetContent side={args.side}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description for the sheet content.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4 text-sm text-neutral-500 dark:text-neutral-400">
          Sheet content goes here.
        </div>
        <SheetFooter>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Confirm
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
