import styled from "styled-components"

type LineStripsStyledProps = {
    $length: number
    $orientation: "vertical" | "horizontal"
}

export const LineStripsStyled = styled.div<LineStripsStyledProps>`
    position: absolute;
    z-index: 100;
    width: 1px;
    height: ${({$length}) => $length}px;
    transform-origin: top;
    ${({$orientation}) => $orientation === "horizontal" ? "transform: rotate(-90deg);": ""}
    
    background: repeating-linear-gradient(
        0deg,
        #fff,
        #fff 4px,
        #000 8px,
        #000 16px
    );
`