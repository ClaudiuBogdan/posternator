import styled from "styled-components"
import { LineStyledProps } from "./types"

export const LineStyled = styled.div<LineStyledProps>`
    position: absolute;
    z-index: 100;
    width: 1px;
    height: ${({$length}) => $length}px;
    transform-origin: top;
    ${({$orientation}) => $orientation === "horizontal" ? "transform: rotate(-90deg);": ""}
    ${({$position}) => `top: ${$position.y}px;`}
    ${({$position}) => `left: ${$position.x}px;`}
    
    background: repeating-linear-gradient(
        0deg,
        #fff,
        #fff 4px,
        #000 8px,
        #000 16px
    );
`