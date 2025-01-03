import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { DialogProps } from "@radix-ui/react-dialog";

const DialogStories = {
  title: "Components/Dialog",
  component: Dialog,
  subcomponents: {
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Dialog component.",
    },
  },
};

export default DialogStories;

export const Playground = {
  args: {},
  render: (args: React.JSX.IntrinsicAttributes & DialogProps) => (
    <Dialog {...args}>
      <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded">
        Open Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description for the dialog content.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          Dialog content goes here.
        </div>
        <DialogFooter>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Confirm
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
