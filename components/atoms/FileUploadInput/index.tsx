import { DragEventHandler, FC } from "react"
import {useDropzone} from "react-dropzone"
import { FileUploadInputStyled } from "./styles"

type FileUploadInputProps = {
  onDragEnter?: DragEventHandler;
  onUpload?: (acceptedFiles: File[]) => void
}

export const FileUploadInput: FC<FileUploadInputProps> = ({onDragEnter, onUpload}) => {

  const accept = ".jpeg,.jpg,.png,.gif"

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({onDragEnter, onDropAccepted: onUpload, multiple: false, accept})

  return (
    <FileUploadInputStyled {...getRootProps({isFocused, isDragAccept, isDragReject})}>
      <input {...getInputProps()} />
      <p>Click here to select an image</p>
    </FileUploadInputStyled>
  )
}