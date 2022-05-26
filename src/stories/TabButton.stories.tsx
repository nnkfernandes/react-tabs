import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabButton, TabButtonInterface } from "../components/TabButton";
export default {
  title: "Tab/TabButton",
  component: TabButton
} as ComponentMeta<typeof TabButton>;

const Template: ComponentStory<typeof TabButton> = (args: TabButtonInterface) => (
  <TabButton {...args} />
);

export const Q1 = Template.bind({});
Q1.args = {
  name: 'tab1',
  active:true
};