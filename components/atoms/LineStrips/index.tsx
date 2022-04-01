import { FC } from "react"
import { LineStripsStyled } from "./styles"

type LineStripsProps = {
  id?: string
  length: number
  orientation: "vertical" | "horizontal"
}

export const LineStrips: FC<LineStripsProps> = ({id, length, orientation}) => {
  return <LineStripsStyled {...{
    id,
    $length: length,
    $orientation: orientation,
  }}/>
}