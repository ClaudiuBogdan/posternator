import { FC, useEffect, useState } from "react"
import { SizeInput } from "components/atoms/SizeInput"
import { SizeInputStyled } from "./styles"
import { PosterSize, SizePickerProps } from "./types"

export const SizePicker: FC<SizePickerProps> = ({onChange}) => {
  const initialSize: PosterSize = {
    width: 0.40,
    height: 0.50,
  }
  const [size, setSize] = useState<PosterSize>(initialSize)

  useEffect(() => {
    onChange && onChange(size)
  }, [size, onChange])

  const handleWidthChange = (width: number) => {
    setSize({
      ...size,
      width,
    })
  }

  const handleHeightChange = (height: number) => {
    setSize({
      ...size,
      height,
    })
  }
  return (
    <SizeInputStyled>
      <SizeInput
        id={"poster-size-width"}
        value={size.width}
        label={"width"}
        onChange={handleWidthChange } />
      <SizeInput
        id={"poster-size-height"}
        value={size.height}
        label={"height"}
        onChange={handleHeightChange} />
    </SizeInputStyled>
  )
}