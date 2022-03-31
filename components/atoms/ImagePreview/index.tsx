import Image from "next/image"
import { FC } from "react"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

type ImagePreviewProps = {
  imageSrc?: string
}

export const ImagePreview: FC<ImagePreviewProps> = ({imageSrc}) => {

  return (
    <Image 
      layout='fill'
      src={imageSrc ?? imagePlaceholder} 
      alt="poster-preview" />
  )
}