import { ImagePreviewData } from "components/atoms/ImageInput/types"
import { Line } from "components/atoms/Line/types"
import { PrintFormat } from "components/molecules/PrintFormatPicker"
import { PrintOrientation } from "components/molecules/PrintOrientationPicker"
import { Size } from "components/molecules/SizePicker"

type GenerateGridLinesArgs = {
    posterData: PosterData
    imagePreviewData: ImagePreviewData
}

export type GenerateGridLines = (args: GenerateGridLinesArgs) => Line[]

export type ImageData = {
    src: string
    width: number
    height: number
}

export type PosterData = {
    format: PrintFormat
    size: Size
    orientation: PrintOrientation
}

export type ImagePreviewProps = {
    posterData?: PosterData
    onImageDataChange: (imageData: ImageData) => void
}