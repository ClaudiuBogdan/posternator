import { Radio } from "components/atoms/Radio";
import { FC, MouseEventHandler } from "react";
import { printFormats } from "./data";
import { PrintFormatSelectorStyled } from "./styles";
import { PrintFormatSelectorProps } from "./types";

export const PrintFormatSelector: FC<PrintFormatSelectorProps> = ({selectedOptionId, onOptionSelected}) => {

    return (
        <PrintFormatSelectorStyled>
            
            <p>Paper print format: </p>

            {printFormats.map((printFormat) => (
                <Radio 
                    key={printFormat.id} 
                    id={printFormat.id} 
                    checked={printFormat.id === selectedOptionId}
                    onOptionClick={onOptionSelected}
                    label={printFormat.name} />
            ))}
        </PrintFormatSelectorStyled>
    )
}