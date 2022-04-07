import { FC, useState } from "react"
import { PrintFormat } from "components/molecules/PrintFormatPicker"
import { PrintOrientation } from "components/molecules/PrintOrientationPicker"
import { Size } from "components/molecules/SizePicker"
import { ImagePreview } from "components/organism/ImagePreview"
import { PosterOptions } from "components/organism/PosterOptions"

export const PosterMaker: FC = () => {
  const [format, setFormat] = useState<PrintFormat>()
  const [size, setSize] = useState<Size>()
  const [orientation, setOrientation] = useState<PrintOrientation>()
  const [imageSize, setImageSize] = useState<{width: number, height: number}>()

  const posterData = format && size && orientation && {
    format,
    size,
    orientation,
  }

  return (
    <>
      <ImagePreview {...{
        posterData,
        onImageDataChange: setImageSize,
      }}/>
      <PosterOptions {...{
        imageSize,
        onSizeChange: setSize,
        onPrintFormatChange: setFormat,
        onOrientationChange: setOrientation,
      }}/>
    </>
  )
}