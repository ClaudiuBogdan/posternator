import styled from "styled-components"

type ColorProps = {isDragAccept?: boolean, isDragReject?: boolean, isFocused?: boolean}

const getColor = (props: ColorProps) => {
  if (props.isDragAccept) {
    return "#00e676"
  }
  if (props.isDragReject) {
    return "#ff1744"
  }
  if (props.isFocused) {
    return "#2196f3"
  }
  return "#2196f3"
}

export const FileUploadInputStyled = styled.div<ColorProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${props => getColor(props)};
    border-style: dashed;
    background-color: #fafafa;
    color: #333;
    outline: none;
    transition: border .24s ease-in-out;
    cursor: pointer;

    :hover {
        background-color: #e9e9e9;
    }
  `
