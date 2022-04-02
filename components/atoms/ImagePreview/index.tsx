import Image from "next/image"
import { FC } from "react"
import logger from "global/logger"
import { ImagePreviewStyled } from "./styles"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

type ImagePreviewProps = {
  imageSrc?: string
}

export const ImagePreview: FC<ImagePreviewProps> = ({imageSrc}) => {
  const handleImageClick = () => {
    logger.info({msg: "File uploaded"})
  }
  return (
    <ImagePreviewStyled>
      <Image
        layout="responsive"
        width="100%"
        height="100%"
        src={imageSrc ?? imagePlaceholder}
        onClick={handleImageClick}
        alt="poster-preview" />
    </ImagePreviewStyled>
  )
}