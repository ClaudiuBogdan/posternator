import { ComponentStory, ComponentMeta } from "@storybook/react"
import { PrintFormatSelector } from "components/molecules/PrintFormatSelector"

export default {
  title: "Molecules/PrintFormatSelector",
  component: PrintFormatSelector,
  argTypes: {
  },
} as ComponentMeta<typeof PrintFormatSelector>

const Template: ComponentStory<typeof PrintFormatSelector> = (args) => <PrintFormatSelector {...args}/>

export const Default = Template.bind({})
Default.args = {
  selectedOptionId: "A4",
  onOptionSelected: (optionId: string) => {
  },
}
