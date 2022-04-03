import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PrintOrientationPicker } from "components/molecules/PrintOrientationPicker"

export default {
  title: "Molecules/" + PrintOrientationPicker.name,
  component: PrintOrientationPicker,
  argTypes: {
  },
} as ComponentMeta<typeof PrintOrientationPicker>

const Template: ComponentStory<typeof PrintOrientationPicker> = (args) => <PrintOrientationPicker {...{...args}}/>

export const Default = Template.bind({})
Default.args = {
}