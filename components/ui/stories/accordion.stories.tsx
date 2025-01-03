import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../accordion";
import {
  AccordionMultipleProps,
  AccordionSingleProps
} from "@radix-ui/react-accordion";

const AccordionStories = {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Determines if one or multiple items can be open at a time.",
    },
    defaultValue: {
      control: "text",
      description: "The key(s) of the default open item(s).",
    },
    collapsible: {
      control: "boolean",
      description: "Allows all items to be collapsed if true.",
    },
  },
};

export default AccordionStories;

export const Playground = {
  args: {
    type: "single",
    defaultValue: "item-1",
    collapsible: true,
  },
  render: (args: React.JSX.IntrinsicAttributes & ((AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>)) => (
    <Accordion {...args} className="w-full max-w-md border rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          This is the content for Item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          This is the content for Item 2.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          This is the content for Item 3.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};