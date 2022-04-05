import { FC } from "react"
import { RadioInputStyled } from "./styles"

type RadioInputProps = {
  id: string
  name: string
  label: string
  checked?: boolean
  onOptionClick?: (optionId: string) => void
}

export const RadioInput: FC<RadioInputProps> = ({id, name, label, checked, onOptionClick}) => {
  return (
    <RadioInputStyled onClick={() => onOptionClick && onOptionClick(name)}>
      <input
        type="radio"
        name={name}
        onChange={() => void 0}
        checked={!!checked}
        id={id} />

      <label
        htmlFor={id}>
        {label}
      </label>
    </RadioInputStyled>
  )
}