import { ComponentStory, ComponentMeta } from "@storybook/react"

import { RadioInput } from "../../components/atoms/RadioInput"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atom/Radio",
  component: RadioInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof RadioInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioInput> = (args) => <RadioInput {...args}/>

export const Default = Template.bind({})
Default.args = {
  id: "radio-1",
  name: "radio-1",
  label: "Radio 1",
}