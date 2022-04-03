import { action } from "@storybook/addon-actions"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { SizeInput } from "../../components/atoms/SizeInput"

export const ActionsData = {
  onPinTask: action("onChange"),
}

export default {
  title: "Atom/SizeInput",
  component: SizeInput,
  argTypes: {
  },
} as ComponentMeta<typeof SizeInput>

const Template: ComponentStory<typeof SizeInput> = (args) => <SizeInput {...{...args, ...ActionsData}}/>

export const Default = Template.bind({})
Default.args = {
}