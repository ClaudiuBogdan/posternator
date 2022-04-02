import { FC } from "react"
import { Line } from "components/atoms/Line"
import { GuideLinesStyled } from "./styles"
import { GuideLinesProps } from "./types"

export const GuideLines: FC<GuideLinesProps> = ({lines}) => {
  return (
    <GuideLinesStyled>
      {lines.map(({length, orientation, position}, index) => (
        <Line
          key={index}
          id={`guide-line-${index}`}
          position={position}
          length={length}
          orientation={orientation}/>
      ))}
    </GuideLinesStyled>

  )
}