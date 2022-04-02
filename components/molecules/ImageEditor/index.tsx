import { FC, useState } from "react"
import { FileUploadField } from "components/atoms/FileUploadField"
import { ImagePreview } from "components/atoms/ImagePreview"
import { Line } from "components/atoms/Line/types"
import logger from "global/logger"
import { GuideLines } from "../GuideLines"

export const ImageEditor: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>()

  const handleFileUpload = (acceptedFiles: File[]) => {
    logger.info({msg: "File uploaded"})
    setUploadedFiles(acceptedFiles)
  }

  const imageSrc = uploadedFiles && uploadedFiles[0] && URL.createObjectURL(uploadedFiles[0])
  logger.info({msg: "imageSrc", imageSrc})

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
    <>
      <GuideLines {...{lines}} />
      <FileUploadField onUpload={handleFileUpload}/>
      <ImagePreview {...{imageSrc}}/>
    </>
  )
}