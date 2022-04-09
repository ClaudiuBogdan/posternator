import { FC, useMemo, useState } from "react"
import { PdfDownloader } from "components/molecules/PdfDownloader"
import { PrintFormat } from "components/molecules/PrintFormatPicker"
import { PrintOrientation } from "components/molecules/PrintOrientationPicker"
import { Size } from "components/molecules/SizePicker"
import { ImagePreview } from "components/organism/ImagePreview"
import { ImageData } from "components/organism/ImagePreview/types"
import { PosterOptions } from "components/organism/PosterOptions"

export const PosterMaker: FC = () => {
  const [format, setFormat] = useState<PrintFormat>()
  const [size, setSize] = useState<Size>()
  const [orientation, setOrientation] = useState<PrintOrientation>()
  const [imageData, setImageData] = useState<ImageData>()

  const posterData = useMemo(() => format && size && orientation && (
    {
      format,
      size,
      orientation,
    }), [format, size, orientation])

  return (
    <>
      <ImagePreview {...{
        posterData,
        onImageDataChange: setImageData,
      }}/>

      <PosterOptions {...{
        imageSize: imageData,
        onSizeChange: setSize,
        onPrintFormatChange: setFormat,
        onOrientationChange: setOrientation,
      }}/>

      <PdfDownloader {...{
        imageData,
        posterData,
      }}/>
    </>
  )
}