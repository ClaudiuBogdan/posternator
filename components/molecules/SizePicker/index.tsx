import { FC, useState } from "react"
import { SizeInput } from "components/atoms/SizeInput"
import { SizeInputStyled } from "./styles"
import { Size, SizePickerProps } from "./types"

const initialSize: Size = {
  width: 0.80,
  height: 0.50,
}

export const SizePicker: FC<SizePickerProps> = ({imageSize, onChange}) => {

  const [size, setSize] = useState<Size>(initialSize)

  const handleWidthChange = (width: number) => {
    const height =  imageSize ? width * imageSize.height / imageSize.width : size.height
    setSize({ height, width})

    if(onChange && size.width && size.height)
      return onChange(size)
  }

  const handleHeightChange = (height: number) => {
    const width =  imageSize ? height * imageSize.width / imageSize.height : size.width
    setSize({ width, height })

    if(onChange && size.width && size.height)
      return onChange(size)
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

export type { Size }
