export type Size = {
    width: number
    height: number
}

export type Position = {
    x: number
    y: number
}

export type ImagePreviewData = {
    size: Size
    position: Position
}

export type ImageInputProps = {
    src?: string
    width?: number
    height?: number
    onChange?: (data: ImagePreviewData) => void
  }

export type OnLoadingComplete = (result: {
    naturalWidth: number;
    naturalHeight: number;
}) => void;