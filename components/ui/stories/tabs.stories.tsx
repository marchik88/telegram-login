import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TabsStories = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for the Tabs component.",
    },
    defaultValue: {
      control: "text",
      description: "The default value of the Tabs.",
      defaultValue: "tab1",
    },
  },
};

export default TabsStories;

export const Playground = {
  args: {
    defaultValue: "tab1",
  },
  render: () => (
    <Tabs>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

export const MultipleTabs = {
  args: {
    defaultValue: "tab1",
  },
  render: () => (
    <Tabs>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
      <TabsContent value="tab4">Content for Tab 4</TabsContent>
    </Tabs>
  ),
};
