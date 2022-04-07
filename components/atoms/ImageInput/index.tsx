import Image from "next/image"
import { FC, useEffect, useRef } from "react"
import logger from "global/logger"
import { ImageInputStyled } from "./styles"
import { ImageInputProps, OnLoadingComplete } from "./types"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

export const ImageInput: FC<ImageInputProps> = ({src, width, height, onChange: onChange}) => {

  const imageRef = useRef<HTMLDivElement>(null)
  const imageElement = imageRef.current

  useEffect(() => {
    if(!imageElement)
      return

    const size = {
      width: imageElement.offsetWidth,
      height: imageElement.offsetHeight,
    }

    const position = {
      x: imageElement.offsetLeft,
      y: imageElement.offsetTop,
    }

    const imageData = {
      size,
      position,
    }

    onChange && onChange(imageData)
  }, [imageElement, onChange])

  const handleImageClick = () => {
    logger.info({msg: "Poster image click"})
  }

  const handleImageLoaded: OnLoadingComplete = (result) => {
    logger.info({msg: "Poster image preview loaded", result})
  }

  const imageHeight = (width && height && `${height / width * 100}%`) ?? "100%"

  return (
    <ImageInputStyled ref={imageRef} >
      <Image
        onLoadingComplete={handleImageLoaded}
        layout="responsive"
        width="100%"
        height={imageHeight}
        src={src ?? imagePlaceholder}
        onClick={handleImageClick}
        alt="poster-preview" />
    </ImageInputStyled>
  )
}