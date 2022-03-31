import { FC, useState } from "react"
import { logInfo } from "../../../logger"
import { FileUploadField } from "../../atoms/FileUploadField"
import { ImagePreview } from "../../atoms/ImagePreview"

export const ImageEditor: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const isUploaded = uploadedFiles.length > 0

  const handleFileUpload = (acceptedFiles: File[]) => {
    logInfo({msg: "File uploaded"})
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