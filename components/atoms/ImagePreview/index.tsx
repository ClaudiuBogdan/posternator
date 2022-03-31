import Image from "next/image"
import { FC } from "react"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

type ImagePreviewProps = {
  imageSrc?: string
}

export const ImagePreview: FC<ImagePreviewProps> = ({imageSrc}) => {

  return (
    <Image
      width={300}
      height={500}
      src={imageSrc ?? imagePlaceholder}
      alt="poster-preview" />
  )
}