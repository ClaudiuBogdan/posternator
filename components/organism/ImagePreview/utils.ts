import { Line } from "components/atoms/Line/types"
import { GenerateGridLines } from "./types"

export const generateGridLines: GenerateGridLines = ({posterData, imagePreviewData}) => {
  const pageWidth = posterData.orientation === "vertical" ? posterData.format.width : posterData.format.height
  const pageHeight = posterData.orientation === "vertical" ? posterData.format.height : posterData.format.width

  const horizontalPages = Math.ceil(posterData.size.width / pageWidth)
  const verticalPages = Math.ceil(posterData.size.height / pageHeight)

  const horizontalLines: Line[] = [...Array(verticalPages - 1)].map((_, i) => {
    const positionOrder = i + 1 // Skip the index 0 as it will position the line at the top of the image
    const previewPosition = imagePreviewData.position
    const previewSize = imagePreviewData.size
    const scaleFactor =  previewSize.width / posterData.size.width
    const line: Line = {
      position: {
        x: previewPosition.x + 0,
        y: previewPosition.y + positionOrder * pageHeight * scaleFactor,
      },
      length: previewSize.width,
      orientation: "horizontal",
    }
    return line
  })

  const verticalLines: Line[] = [...Array(horizontalPages - 1)].map((_, i) => {
    const positionOrder = i + 1 // Skip the index 0 as it will position the line at the top of the image
    const previewPosition = imagePreviewData.position
    const previewSize = imagePreviewData.size
    const scaleFactor =  previewSize.width / posterData.size.width
    const lines: Line = {
      position: {
        x: previewPosition.x + positionOrder * pageWidth * scaleFactor,
        y: previewPosition.y + 0,
      },
      length: previewSize.height,
      orientation: "vertical",
    }
    return lines
  })

  return [...horizontalLines, ...verticalLines]
}