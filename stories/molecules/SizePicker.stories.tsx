import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SizePicker } from "components/molecules/SizePicker"

export default {
  title: "Molecules/SizePicker",
  component: SizePicker,
  argTypes: {
  },
} as ComponentMeta<typeof SizePicker>

const Template: ComponentStory<typeof SizePicker> = (args) => <SizePicker {...{...args}}/>

export const Default = Template.bind({})
Default.args = {
}