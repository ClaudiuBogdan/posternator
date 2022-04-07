import jsPDF from "jspdf"
import { ImageData, PosterData  } from "./types"

export const generatePdf = (imageData: ImageData, posterData: PosterData) => {
  const doc = new jsPDF()

  doc.text("Hello world!", 10, 10)
  doc.addImage(imageData.src, "JPEG", 15, 40, 180, 180)
  doc.save("a4.pdf")
}