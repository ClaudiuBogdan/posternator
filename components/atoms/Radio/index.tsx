import { FC } from "react"
import { RadioStyled } from "./styles"

type RadioProps = {
  id: string
  label: string
}

export const Radio: FC<RadioProps> = ({id, label}) => {
  return (
    <RadioStyled>
      <input type="radio" name={id} id={id} />
      <label htmlFor={id}>{label}</label>
    </RadioStyled>
  )
}