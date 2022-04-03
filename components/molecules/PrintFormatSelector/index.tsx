import { FC } from "react"
import { RadioInput } from "components/atoms/RadioInput"
import { printFormats } from "./data"
import { PrintFormatSelectorStyled } from "./styles"
import { PrintFormatSelectorProps } from "./types"

export const PrintFormatSelector: FC<PrintFormatSelectorProps> = ({selectedOptionId, onOptionSelected}) => {

  return (
    <PrintFormatSelectorStyled>

      <p>Paper print format: </p>

      {printFormats.map((printFormat) => (
        <RadioInput
          key={printFormat.id}
          id={printFormat.id}
          checked={printFormat.id === selectedOptionId}
          onOptionClick={onOptionSelected}
          label={printFormat.name} />
      ))}
    </PrintFormatSelectorStyled>
  )
}