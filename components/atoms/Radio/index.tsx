import { FC } from "react"
import { RadioStyled } from "./styles"

type RadioProps = {
  id: string
  label: string
  checked?: boolean
  onOptionClick?: (optionId: string) => void
}

export const Radio: FC<RadioProps> = ({id, label, checked, onOptionClick}) => {
  return (
    <RadioStyled onClick={() => onOptionClick && onOptionClick(id)}>
      <input
        type="radio"
        name={id}
        checked={!!checked}
        id={id} />

      <label
        htmlFor={id}>
        {label}
      </label>
    </RadioStyled>
  )
}