import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

const CarouselStories = {
  title: "Components/Carousel",
  component: Carousel,
  subcomponents: {
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the carousel.",
    },
    className: {
      control: "text",
      description: "Additional classes for the Carousel component.",
    },
  },
};

export default CarouselStories;

export const Playground = {
  args: {},
  render: () => (
    <Carousel className="w-full max-w-4xl">
      <CarouselPrevious/>
      <CarouselContent>
        {[...Array(5).keys()].map((i) => (
          <CarouselItem
            key={i}
            className="flex h-64 items-center justify-center bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
          >
            Slide {i + 1}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext/>
    </Carousel>
  ),
};
