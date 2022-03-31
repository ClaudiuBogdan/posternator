import { FC, useState } from "react"
import { FileUploadField } from "../../atoms/FileUploadField"
import { ImagePreview } from "../../atoms/ImagePreview"

export const ImageEditor: FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const isUploaded = uploadedFiles.length > 0

  const handleFileUpload = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles)
  }
  return (
    <>  
      <FileUploadField onUpload={handleFileUpload}/>
      <ImagePreview/>
    </>
  )
}