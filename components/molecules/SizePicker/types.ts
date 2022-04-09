export type SizePickerProps = {
    imageSize?: Size
    onChange?: (size: Size) => void;
}

export type Size = {
    width: number
    height: number
}

export type CalculateSizeFromWidth = (args: {
    width: number
    maxSize: number
    aspectRation: number
}) => Size

export type CalculateSizeFromHeight = (args: {
    height: number
    maxSize: number
    aspectRation: number
}) => Size