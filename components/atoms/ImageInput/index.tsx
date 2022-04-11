import Image from "next/image"
import { FC, useCallback, useEffect, useRef } from "react"
import logger from "global/logger"
import { useWindowSize } from "hooks/useWindowSize"
import { ImageInputStyled } from "./styles"
import { ImageInputProps, OnLoadingComplete } from "./types"

const imagePlaceholder = "/assets/images/image-preview-placeholder.svg"

export const ImageInput: FC<ImageInputProps> = ({src, width, height, onChange: onChange}) => {

  const imageRef = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()
  const imageHeight = (width && height && `${height / width * 100}%`) ?? "100%"

  const triggerImageChange = useCallback( () => {
    const imageElement = imageRef.current

    if(!imageElement)
      return

    const width = imageElement.offsetWidth
    const height = imageElement.offsetHeight
    const x = imageElement.offsetLeft
    const y = imageElement.offsetTop

    const size = { width, height }
    const position = { x, y }

    const imageData = { size, position }

    onChange && onChange(imageData)
  }, [onChange])

  useEffect(() => {
    triggerImageChange()
  }, [windowSize, triggerImageChange, imageHeight])

  const handleImageLoaded: OnLoadingComplete = (result) => {
    logger.info( "Poster image preview loaded", {result})
    triggerImageChange()
  }

  const handleImageClick = () => {
    logger.info("Poster image click")
  }

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