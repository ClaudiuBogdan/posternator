import jsPDF from "jspdf"

export const generatePdf = (imageSrc: string) => {
  const doc = new jsPDF()
  doc.text("Hello world!", 10, 10)
  doc.addImage(imageSrc, "JPEG", 15, 40, 180, 180)
  doc.save("a4.pdf")
}