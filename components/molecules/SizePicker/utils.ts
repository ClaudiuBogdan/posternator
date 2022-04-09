import { CalculateSizeFromHeight, CalculateSizeFromWidth } from "./types"

/**
 * Calculate size based on image aspect ration. The size aspect ration must be the same as the image aspect ration to avoid distortion.
 */
export const calculateSizeFromWidth: CalculateSizeFromWidth = ( {width, maxSize, aspectRation}) => {
  const decimalFactor = 1000
  if(aspectRation > 1){
    const newWidth = Math.min(width, maxSize)
    const newHeight = Math.round(decimalFactor * newWidth / aspectRation) / decimalFactor
    return {
      width: newWidth,
      height: newHeight,
    }
  }

  const rawHeight = Math.round(decimalFactor * width / aspectRation) / decimalFactor
  const newHeight = Math.min(rawHeight, maxSize)
  const newWidth = Math.round(decimalFactor * newHeight * aspectRation) / decimalFactor

  return {
    width: newWidth,
    height: newHeight,
  }
}

/**
 * Calculate size based on image aspect ration. The size aspect ration must be the same as the image aspect ration to avoid distortion.
 */
export const calculateSizeFromHeight: CalculateSizeFromHeight = ( {height, maxSize, aspectRation}) => {
  const decimalFactor = 1000
  if(aspectRation > 1){
    const newWidth = Math.min(height * aspectRation, maxSize)
    const newHeight = Math.round(decimalFactor * newWidth / aspectRation) / decimalFactor
    return {
      width: newWidth,
      height: newHeight,
    }
  }

  const newHeight = Math.min(height, maxSize)
  const newWidth = Math.round(decimalFactor * newHeight * aspectRation) / decimalFactor

  return {
    width: newWidth,
    height: newHeight,
  }
}
