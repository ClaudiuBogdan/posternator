import jsPDF from "jspdf"
import { CalculateImagePartition, ImageData, PdfImagePartition, PosterData  } from "./types"

export const generatePdf = (imageData: ImageData, posterData: PosterData) => {
  const pdfImagePartitions = calculateImagePartition(imageData, posterData)

  if(pdfImagePartitions.length < 1)
    return

  const units = "mm"
  const {format, orientation} = pdfImagePartitions[0]
  const doc = new jsPDF(orientation, units, format)

  for(let partition of pdfImagePartitions) {
    const {x, y ,width ,height} = partition
    doc.addPage(format, orientation)
    doc.addImage(imageData.src, "JPEG", x, y, width, height)
  }

  doc.save("a4.pdf")
}

// TODO: add horizontalPages
export const calculateImagePartition: CalculateImagePartition = (imageData, posterData) => {
  return posterData.orientation === "vertical" ? calculateVerticalImagePartition(imageData, posterData) : calculateVerticalImagePartition(imageData, posterData)

}

/**
 * Calculate the image partition for a vertical poster.
 * @param imageData
 * @param posterData
 * @returns
 */
const calculateVerticalImagePartition: CalculateImagePartition = (imageData, posterData) => {
  const meterToMillimeterFactor = 1000
  const pageWidth = posterData.format.width * meterToMillimeterFactor
  const pageHeight = posterData.format.height * meterToMillimeterFactor

  const imageWidth = posterData.size.width * meterToMillimeterFactor
  const imageHeight = posterData.size.height * meterToMillimeterFactor

  const orientation = posterData.orientation === "vertical" ? "portrait" : "landscape"
  const format = posterData.format.id

  const horizontalPages = Math.ceil(posterData.size.width / posterData.format.width)
  const verticalPages = Math.ceil(posterData.size.width / posterData.format.height)

  const pdfImagePartitions: PdfImagePartition[] = []

  for(let j = 0; j < verticalPages; j++) {
    for(let  i = 0; i < horizontalPages; i++) {
      const x = - i * pageWidth
      const y = - j * pageHeight
      pdfImagePartitions.push({ x, y, width: imageWidth, height: imageHeight, orientation, format })
    }
  }

  return pdfImagePartitions
}

// const calculateHorizontalImagePartition: CalculateImagePartition = (imageData, posterData) => {
// }