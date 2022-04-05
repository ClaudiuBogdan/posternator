import { FC } from "react"
import { PrintFormatPicker } from "components/molecules/PrintFormatPicker"
import { PrintOrientationPicker } from "components/molecules/PrintOrientationPicker"
import { SizePicker } from "components/molecules/SizePicker"
import { PosterOptionsStyled } from "./styles"

type PosterOptionsProps = {}

export const PosterOptions: FC<PosterOptionsProps> = () => {
  return (
    <PosterOptionsStyled>
      <SizePicker />
      <PrintFormatPicker/>
      <PrintOrientationPicker/>

    </PosterOptionsStyled>
  )
}