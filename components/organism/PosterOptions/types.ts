import { PrintFormat } from "components/molecules/PrintFormatPicker"
import { PrintOrientation } from "components/molecules/PrintOrientationPicker"
import { Size } from "components/molecules/SizePicker"

export type PosterOptionsProps = {
    imageSize?: Size
    onSizeChange?: (size: Size) => void
    onOrientationChange?: (orientation: PrintOrientation) => void
    onPrintFormatChange?: (format: PrintFormat) => void
}
