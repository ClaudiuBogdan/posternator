export type SizePickerProps = {
    onChange?: (size: PosterSize) => void;
}

export type PosterSize = {
    width: number
    height: number
}