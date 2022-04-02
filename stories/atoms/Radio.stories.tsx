import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Radio } from "../../components/atoms/Radio"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atom/Radio",
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Radio>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args}/>

export const Default = Template.bind({});
Default.args = {
  id: "radio-1",
  label: "Radio 1",
};