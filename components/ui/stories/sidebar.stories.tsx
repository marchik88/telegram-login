import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../sidebar";

const SidebarStories = {
  title: "Components/Sidebar",
  component: SidebarProvider,
  subcomponents: {
    Sidebar,
    SidebarTrigger,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Sidebar component.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the sidebar is open by default.",
      defaultValue: true,
    },
  },
};

export default SidebarStories;

export const Playground = {
  args: {
    defaultOpen: true,
  },
  render: (args: React.JSX.IntrinsicAttributes & Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }, "ref"> & React.RefAttributes<HTMLDivElement>) => (
    <SidebarProvider {...args}>
      <Sidebar>
        <SidebarHeader>Header Content</SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Home">Home</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings">Settings</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>Footer Content</SidebarFooter>
      </Sidebar>
      <SidebarTrigger/>
    </SidebarProvider>
  ),
};
