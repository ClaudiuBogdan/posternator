import Image from "next/image"
import { FC } from "react"
import { logInfo } from "../../../logger"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

type ImagePreviewProps = {
  imageSrc?: string
}

export const ImagePreview: FC<ImagePreviewProps> = ({imageSrc}) => {
  const handleImageClick = () => {
    logInfo({msg: "File uploaded"})
  }
  return (
    <Image
      width={300}
      height={500}
      src={imageSrc ?? imagePlaceholder}
      onClick={handleImageClick}
      alt="poster-preview" />
  )
}