import { PrintFormat } from "../PrintFormatPicker"

export type Orientation = "horizontal" | "vertical"

export type Position = {
    x: number
    y: number
}

export type Size = {
    width: number
    height: number
}

export type PrintOrientations = {
    orientation: "portrait" | "landscape";
}

export type PrintFormats = {
    format: "A1" | "A2" | "A3" | "A4" | "A5"
}

// Size represents the image size and position the origin of the image into the pdf file
export type PdfImagePartition = Position & Size & PrintOrientations & PrintFormats

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

export type CalculateImagePartition = (imageData: ImageData, posterData: PosterData) => PdfImagePartition[]