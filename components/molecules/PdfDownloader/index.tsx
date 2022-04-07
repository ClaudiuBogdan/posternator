import { FC } from "react"
import { DownloadButton } from "components/atoms/DownloadButton"
import logger from "global/logger"
import { PdfDownloaderProps } from "./types"
import { generatePdf } from "./utils"

export const PdfDownloader: FC<PdfDownloaderProps> = ({imageData}) => {

  const disabled = !imageData

  const handleDownloadClick = () => {
    logger.info("Download PDF click")
    if(!imageData)
      return

    generatePdf(imageData.src)
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