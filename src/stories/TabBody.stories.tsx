import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TabBody, TabBodyInterface } from "../components/TabBody";
export default {
  title: "Tab/TabBody",
  component: TabBody
} as ComponentMeta<typeof TabBody>;

const Template: ComponentStory<typeof TabBody> = (args: TabBodyInterface) => (
  <TabBody {...args} />
);

export const Q1 = Template.bind({});
Q1.args = {
  content: 'Esta é a tab 1'
}; 