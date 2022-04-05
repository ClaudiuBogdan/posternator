import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PrintFormatPicker } from "components/molecules/PrintFormatPicker"

export default {
  title: "Molecules/PrintFormatSelector",
  component: PrintFormatPicker,
  argTypes: {
  },
} as ComponentMeta<typeof PrintFormatPicker>

const Template: ComponentStory<typeof PrintFormatPicker> = (args) => <PrintFormatPicker {...args}/>

export const Default = Template.bind({})
Default.args = {
}
