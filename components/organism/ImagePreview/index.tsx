import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
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
  const [imageSrc, setImageSrc] = useState<string>()
  const prevImageRef = useRef<string>()

  const [imageFile] = uploadedFiles ?? []
  const imageUploadData = useImageUpload({image: imageFile})

  // Update image src if new file uploaded
  useEffect(() => {
    // Remove prev image from DOM
    if(prevImageRef.current)
      URL.revokeObjectURL(prevImageRef.current)

    const newImageSrc = imageFile && URL.createObjectURL(imageFile)
    setImageSrc(newImageSrc)

    prevImageRef.current = newImageSrc
  }, [imageFile])

  // Propagate image data change event to the parent component
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
    logger.info("File uploaded")
    setUploadedFiles(acceptedFiles)
  }

  const handleImageChange = useCallback((imageData: ImagePreviewData) => {
    logger.info("Image preview changed", {imageData})
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