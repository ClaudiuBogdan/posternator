import { FC, useState } from "react"
import { FileUploadInput } from "components/atoms/FileUploadInput"
import { ImagePreview } from "components/atoms/ImagePreview"
import { Line } from "components/atoms/Line/types"
import logger from "global/logger"
import { useImageUpload } from "hooks/useImageUpload"
import { GuideLines } from "../../molecules/GuideLines"

export const ImageEditor: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>()

  const handleFileUpload = (acceptedFiles: File[]) => {
    logger.info({msg: "File uploaded"})
    setUploadedFiles(acceptedFiles)
  }

  const imageSrc = uploadedFiles && uploadedFiles[0] && URL.createObjectURL(uploadedFiles[0])

  const [imageFile] = uploadedFiles ?? []
  const imageData = useImageUpload({image: imageFile})

  logger.info({msg: "imageSrc", imageSrc, imageData})

  const lines: Line[] = [
    {
      length: 100,
      orientation: "vertical",
      position: {
        x: 100,
        y: 200,
      },
    },
  ]

  return (
    <div>
      <GuideLines {...{lines}} />
      <FileUploadInput onUpload={handleFileUpload}/>
      <ImagePreview {...{
        src: imageSrc,
        width: imageData?.width,
        height: imageData?.height,
      }}/>
    </div>
  )
}