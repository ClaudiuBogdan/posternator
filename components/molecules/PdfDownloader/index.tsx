import { FC } from "react"
import { DownloadButton } from "components/atoms/DownloadButton"
import logger from "global/logger"
import { PdfDownloaderProps } from "./types"
import { generatePdf } from "./utils"

export const PdfDownloader: FC<PdfDownloaderProps> = ({imageData, posterData}) => {

  const disabled = !(imageData && posterData)

  const handleDownloadClick = () => {
    logger.info("Download PDF click")
    if(disabled)
      return

    generatePdf(imageData, posterData)
    logger.info("Pdf generated")
  }

  return (
    <DownloadButton
      onClick={handleDownloadClick}
      disabled={disabled}>
      Download PDF
    </DownloadButton>
  )

}