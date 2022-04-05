export type PrintFormatSelectorProps = {
    onChange?: (optionId: string) => void
}

export type PrintFormatId = "A1" | "A2" | "A3" | "A4" | "A5"

export type PrintFormat = {
    id: PrintFormatId;
    name: string;
    width: number;
    height: number;
}
