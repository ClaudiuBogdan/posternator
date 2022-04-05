import { FC, useEffect, useState } from "react"
import { RadioInput } from "components/atoms/RadioInput"
import { printFormats } from "./data"
import { PrintFormatSelectorStyled } from "./styles"
import { PrintFormatId, PrintFormatSelectorProps as PrintFormatPickerProps } from "./types"

export const PrintFormatPicker: FC<PrintFormatPickerProps> = ({onChange}) => {
  const [selectedOptionId, setSelectedOption] = useState<PrintFormatId>("A4")

  useEffect(() => {
    onChange && onChange(selectedOptionId)
  }, [selectedOptionId, onChange])

  const handleOptionChange = (newOptionId: string) => {
    setSelectedOption(newOptionId as PrintFormatId)
  }

  return (
    <PrintFormatSelectorStyled>

      <p>Paper print format: </p>

      {printFormats.map((printFormat) => (
        <RadioInput
          key={printFormat.id}
          id={printFormat.id}
          name={printFormat.id}
          checked={printFormat.id === selectedOptionId}
          onOptionClick={handleOptionChange}
          label={printFormat.name} />
      ))}
    </PrintFormatSelectorStyled>
  )
}