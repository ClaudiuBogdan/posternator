export type SizePickerProps = {
    imageSize?: Size
    onChange?: (size: Size) => void;
}

export type Size = {
    width: number
    height: number
}