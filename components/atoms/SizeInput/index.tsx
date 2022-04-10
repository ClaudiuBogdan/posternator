import { ChangeEvent, FC } from "react"
import { SizeInputStyled } from "./styles"
import { SizeInputProps } from "./types"

export const SizeInput: FC<SizeInputProps> = ({id, value = 0.15, label, onChange}) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const centimeters = Number(event.target.value)
    const meters = centimeters / 100
    onChange(meters)
  }

  const centimeters = Math.round(value * 10000) / 100

  return (
    <SizeInputStyled>
      <input id={id} type="number" min={1} max={1000} value={Number(centimeters).toString()} step={1} onChange={handleOnChange}/>
      <label htmlFor={id}> cm {label}</label>
    </SizeInputStyled>
  )
}