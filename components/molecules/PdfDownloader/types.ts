import { PrintFormat } from "../PrintFormatPicker"

export type Orientation = "horizontal" | "vertical"

export type Size = {
    width: number
    height: number
}

export type ImageData = Size & {
    src: string
}

export type PosterData = {
    size: Size
    format: PrintFormat
    orientation: Orientation
}

export type PdfDownloaderProps = {
    imageData?: ImageData
    posterData?: PosterData
}