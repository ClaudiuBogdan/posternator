import { FC, useCallback, useEffect, useState } from "react"
import { FileUploadInput } from "components/atoms/FileUploadInput"
import { ImageInput } from "components/atoms/ImageInput"
import { ImagePreviewData } from "components/atoms/ImageInput/types"
import logger from "global/logger"
import { useImageUpload } from "hooks/useImageUpload"
import { ImagePreviewProps } from "./types"
import { generateGridLines } from "./utils"
import { GuideLines } from "../../molecules/GuideLines"

export const ImagePreview: FC<ImagePreviewProps> = ({posterData, onImageDataChange}) => {

  const [uploadedFiles, setUploadedFiles] = useState<File[]>()
  const [imagePreviewData, setImagePreviewData] = useState<ImagePreviewData>()
  const [imageFile] = uploadedFiles ?? []
  const imageData = useImageUpload({image: imageFile})
  const imageSrc = uploadedFiles && uploadedFiles[0] && URL.createObjectURL(uploadedFiles[0])

  useEffect(() => {
    if(!imageData || !onImageDataChange)
      return
    onImageDataChange(imageData)
  }, [imageData, onImageDataChange])

  const handleFileUpload = (acceptedFiles: File[]) => {
    logger.info({msg: "File uploaded"})
    setUploadedFiles(acceptedFiles)
  }

  const handleImageChange = useCallback((imageData: ImagePreviewData) => {
    logger.info({msg: "Image preview changed", imageData})
    setImagePreviewData(imageData)
  }, [])

  const lines = imagePreviewData && posterData ? generateGridLines({posterData, imagePreviewData}) : []

  return (
    <div>
      <GuideLines {...{lines}} />
      <FileUploadInput onUpload={handleFileUpload}/>
      <ImageInput {...{
        src: imageSrc,
        width: imageData?.width,
        height: imageData?.height,
        onChange: handleImageChange,
      }}/>
    </div>
  )
}