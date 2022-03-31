import { FC, useState } from "react"
import { FileUploadField } from "components/atoms/FileUploadField"
import { ImagePreview } from "components/atoms/ImagePreview"
import logger from "global/logger"

export const ImageEditor: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const isUploaded = uploadedFiles.length > 0

  const handleFileUpload = (acceptedFiles: File[]) => {
    logger.info({msg: "File uploaded"})
    setUploadedFiles(acceptedFiles)
  }

  return (
    <>
      {isUploaded && (<p>File uploaded</p>)}
      <FileUploadField onUpload={handleFileUpload}/>
      <ImagePreview/>
    </>
  )
}