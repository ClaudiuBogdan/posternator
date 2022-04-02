export type PrintFormatSelectorProps = {   
    selectedOptionId: string
    onOptionSelected: (optionId: string) => void
}

export type PrintFormat = {
    id: string;
    name: string;
    width: number;
    height: number;
}