import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs, TabsProps } from "../components/Tabs";
export default {
  title: "Tab/Tabs",
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => (
  <Tabs {...args} />
);

export const Q1 = Template.bind({});
Q1.args = {
  tabs  : [
        {
            tabName: 'tab 1',
            tabContent: 'Texto do primeiro tab'
        },
        {
            tabName: 'tab 2',
            tabContent: 'Texto do segundo tab'
        },
        {
            tabName: 'tab 3',
            tabContent: 'Texto do terceiro tab'
        },
        {
            tabName: 'tab 4',
            tabContent: 'Texto do quarto tab'
        }
      ]
}; 