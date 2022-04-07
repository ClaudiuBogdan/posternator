import { FC } from "react"
import { PrintFormatPicker } from "components/molecules/PrintFormatPicker"
import { printFormats } from "components/molecules/PrintFormatPicker/data"
import { PrintOrientationPicker } from "components/molecules/PrintOrientationPicker"
import { PrintOrientation } from "components/molecules/PrintOrientationPicker/types"
import { SizePicker, Size } from "components/molecules/SizePicker"
import logger from "global/logger"
import { PosterOptionsStyled } from "./styles"
import { PosterOptionsProps } from "./types"

export const PosterOptions: FC<PosterOptionsProps> = ({imageSize, onSizeChange, onPrintFormatChange, onOrientationChange}) => {

  const handleSizeChange = (size: Size) => {
    logger.info("Poster size changed: " + size, {size})
    onSizeChange && onSizeChange(size)
  }

  const handlePrintFormatChange = (printFormatId: string) => {
    logger.info("Poster print format changed: " + printFormatId, {printFormatId})
    const printFormat = printFormats[printFormatId]
    onPrintFormatChange && onPrintFormatChange(printFormat)
  }

  const handlePrintOrientationChange = (printOrientation: PrintOrientation) => {
    logger.info("Poster print orientation changed: " + printOrientation, {printOrientation})
    onOrientationChange && onOrientationChange(printOrientation)
  }

  return (
    <PosterOptionsStyled>
      <SizePicker imageSize={imageSize} onChange={handleSizeChange} />
      <PrintFormatPicker onChange={handlePrintFormatChange}/>
      <PrintOrientationPicker onChange={handlePrintOrientationChange}/>
    </PosterOptionsStyled>
  )
}