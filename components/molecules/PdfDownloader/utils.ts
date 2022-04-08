import jsPDF from "jspdf"
import { CalculateImagePartition, ImageData, PdfImagePartition, PosterData  } from "./types"

/**
 * Generates a PDF file from the given image data and poster data. This function triggers a pdf file download
 * @param imageData
 * @param posterData
 * @returns
 */
export const generatePdf = (imageData: ImageData, posterData: PosterData) => {
  const pdfImagePartitions = calculateImagePartition(posterData)

  if(pdfImagePartitions.length < 1)
    return

  const units = "mm"
  const {format, orientation} = pdfImagePartitions[0]
  const doc = new jsPDF(orientation, units, format)

  for(let partition of pdfImagePartitions) {
    const {x, y ,width ,height} = partition
    doc.addPage(format, orientation)
    // TODO: check image format
    doc.addImage(imageData.src, "JPEG", x, y, width, height)
  }

  doc.save("a4.pdf")
}

/**
 * Calculate the image partition for based on poster size.
 * This algorithms calculates how many pages fits into the poster, based on image format, poster size, orientation.
 * The image dimension doesn't influence the number of pages, only the image print density.
 * The poster dimension must be proportional to the image dimension to avoid distortion.
 * @param imageData
 * @param posterData
 * @returns
 */
export const calculateImagePartition: CalculateImagePartition = (posterData) => {
  const meterToMillimeterFactor = 1000

  const orientation = posterData.orientation === "vertical" ? "portrait" : "landscape"
  const format = posterData.format.id

  const pageSize = {
    width:  posterData.orientation === "vertical" ? posterData.format.width : posterData.format.height,
    height: posterData.orientation === "vertical" ? posterData.format.height : posterData.format.width,
  }
  const pageWidth =  pageSize.width
  const pageHeight = pageSize.height

  const imageWidth = posterData.size.width * meterToMillimeterFactor
  const imageHeight = posterData.size.height * meterToMillimeterFactor

  const horizontalPages = Math.ceil(posterData.size.width / pageWidth)
  const verticalPages = Math.ceil(posterData.size.width / pageHeight)

  const pdfImagePartitions: PdfImagePartition[] = []

  for(let j = 0; j < verticalPages; j++) {
    for(let  i = 0; i < horizontalPages; i++) {
      // Coordinates must be converted from meters to millimeters (units used in the pdf generator)
      const x = - i * pageWidth * meterToMillimeterFactor
      const y = - j * pageHeight * meterToMillimeterFactor

      pdfImagePartitions.push({ x, y, width: imageWidth, height: imageHeight, orientation, format })
    }
  }

  return pdfImagePartitions
}