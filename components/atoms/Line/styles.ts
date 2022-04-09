import styled from "styled-components"
import { LineStyledProps } from "./types"

//https://css-tricks.com/svg-marching-ants/

export const LineStyled = styled.svg.attrs<LineStyledProps>(({$length, $orientation, $position}) => ({
  style: {
    height: $length + "px",
    transform: $orientation === "horizontal" ? "rotate(-90deg)": "",
    top: $position.y + "px",
    left: $position.x + "px",
  }}))`
    position: absolute;
    z-index: 100;
    width: 1px;
    transform-origin: top;


    /* Background line color */
    path:nth-of-type(1) {
        fill: none;
        stroke: #fff;
        stroke-width: 1px;
    }
    /* Strips color with animation */
    path:nth-of-type(2) {
        fill: none;
        stroke: #000;
        stroke-width: 1px;
        vector-effect: non-scaling-stroke;
        stroke-dasharray: 8px;
        animation: stroke 0.2s linear infinite;
        shape-rendering: geometricPrecision;
        stroke-dashoffset: 16px;
    }


    @keyframes stroke {
        to {
            stroke-dashoffset: 0;
        }
    }

`