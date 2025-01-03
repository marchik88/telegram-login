import React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../menubar";
import { MenubarProps } from "@radix-ui/react-menubar";

const MenubarStories = {
  title: "Components/Menubar",
  component: Menubar,
  subcomponents: {
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarLabel,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarPortal,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarGroup,
    MenubarSub,
    MenubarShortcut,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Menubar component.",
    },
  },
};

export default MenubarStories;

export const Playground = {
  args: {},
  render: (args: React.JSX.IntrinsicAttributes & Omit<MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open File</MenubarItem>
          <MenubarSeparator/>
          <MenubarCheckboxItem checked>Auto Save</MenubarCheckboxItem>
          <MenubarSeparator/>
          <MenubarRadioGroup>
            <MenubarRadioItem value="1">Option 1</MenubarRadioItem>
            <MenubarRadioItem value="2">Option 2</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSub>
            <MenubarSubTrigger>More Options</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Sub Option 1</MenubarItem>
              <MenubarItem>Sub Option 2</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
