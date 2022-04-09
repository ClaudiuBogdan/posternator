import { FC, useCallback, useEffect, useMemo, useState } from "react"
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
  const imageUploadData = useImageUpload({image: imageFile})
  const imageSrc = useMemo(() => uploadedFiles && uploadedFiles[0] && URL.createObjectURL(uploadedFiles[0]), [uploadedFiles])

  useEffect(() => {
    if(!imageUploadData || !onImageDataChange || !imageSrc)
      return
    const imageData = {
      src: imageSrc,
      ...imageUploadData,
    }
    onImageDataChange(imageData)
  }, [imageUploadData, onImageDataChange, imageSrc])

  const handleFileUpload = (acceptedFiles: File[]) => {
    logger.info({msg: "File uploaded"})
    setUploadedFiles(acceptedFiles)
  }

  const handleImageChange = useCallback((imageData: ImagePreviewData) => {
    logger.info({msg: "Image preview changed", imageData})
    setImagePreviewData(imageData)
  }, [])

  const lines = useMemo(() => imagePreviewData && posterData ? generateGridLines({posterData, imagePreviewData}) : [] , [imagePreviewData, posterData])

  return (
    <div>
      <FileUploadInput onUpload={handleFileUpload}/>
      <div>
        <GuideLines {...{lines}} />
        <ImageInput {...{
          src: imageSrc,
          width: imageUploadData?.width,
          height: imageUploadData?.height,
          onChange: handleImageChange,
        }}/>
      </div>

    </div>
  )
}