import { FC } from "react"
import { LineStyled } from "./styles"
import { LineProps } from "./types"

export const Line: FC<LineProps> = ({id, position, length, orientation}) => {
  return <LineStyled {...{
    id,
    $position: position,
    $length: length,
    $orientation: orientation,
  }}/>
}
