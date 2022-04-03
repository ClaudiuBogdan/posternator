import { FC } from "react"
import { RadioInputStyled } from "./styles"

type RadioInputProps = {
  id: string
  label: string
  checked?: boolean
  onOptionClick?: (optionId: string) => void
}

export const RadioInput: FC<RadioInputProps> = ({id, label, checked, onOptionClick}) => {
  return (
    <RadioInputStyled onClick={() => onOptionClick && onOptionClick(id)}>
      <input
        type="radio"
        name={id}
        checked={!!checked}
        id={id} />

      <label
        htmlFor={id}>
        {label}
      </label>
    </RadioInputStyled>
  )
}