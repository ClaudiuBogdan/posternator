import { FC, useCallback } from "react"
import { PrintFormatPicker } from "components/molecules/PrintFormatPicker"
import { printFormats } from "components/molecules/PrintFormatPicker/data"
import { PrintOrientationPicker } from "components/molecules/PrintOrientationPicker"
import { PrintOrientation } from "components/molecules/PrintOrientationPicker/types"
import { SizePicker, Size } from "components/molecules/SizePicker"
import logger from "global/logger"
import { PosterOptionsStyled } from "./styles"
import { PosterOptionsProps } from "./types"

export const PosterOptions: FC<PosterOptionsProps> = ({imageSize, onSizeChange, onPrintFormatChange, onOrientationChange}) => {

  const handleSizeChange = useCallback((size: Size) => {
    logger.info("[Options] size changed", {size})
    onSizeChange && onSizeChange(size)
  }, [onSizeChange])

  const handlePrintFormatChange = useCallback((printFormatId: string) => {
    logger.info("[Options] print format changed", { printFormatId})
    const printFormat = printFormats[printFormatId]
    onPrintFormatChange && onPrintFormatChange(printFormat)
  }, [onPrintFormatChange])

  const handlePrintOrientationChange = useCallback((printOrientation: PrintOrientation) => {
    logger.info("[Options] print orientation changed", { printOrientation})
    onOrientationChange && onOrientationChange(printOrientation)
  }, [onOrientationChange])

  return (
    <PosterOptionsStyled>
      <SizePicker imageSize={imageSize} onChange={handleSizeChange} />
      <PrintFormatPicker onChange={handlePrintFormatChange}/>
      <PrintOrientationPicker onChange={handlePrintOrientationChange}/>
    </PosterOptionsStyled>
  )
}