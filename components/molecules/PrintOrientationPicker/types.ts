export type PrintOrientation = "vertical" | "horizontal"

export type PrintOrientationPickerProps = {
  onChange?: (orientation: PrintOrientation) => void
}

export type PrintOrientationOption = {
    id: string
    name: PrintOrientation
    label: string
}