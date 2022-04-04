import Image from "next/image"
import { FC } from "react"
import logger from "global/logger"
import { ImagePreviewStyled } from "./styles"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

type ImagePreviewProps = {
  src?: string
  width?: number
  height?: number
}

export const ImagePreview: FC<ImagePreviewProps> = ({src, width, height}) => {
  const handleImageClick = () => {
    logger.info({msg: "Poster image click"})
  }
  const imageHeight = (width && height && `${height / width * 100}%`) ?? "100%"

  return (
    <ImagePreviewStyled>
      <Image
        layout="responsive"
        width="100%"
        height={imageHeight}
        src={src ?? imagePlaceholder}
        onClick={handleImageClick}
        alt="poster-preview" />
    </ImagePreviewStyled>
  )
}