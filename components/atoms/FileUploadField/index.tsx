import { DragEventHandler, FC } from "react"
import {useDropzone} from "react-dropzone"

type FileUploadFieldProps = {
  onDragEnter?: DragEventHandler;
  onUpload?: (acceptedFiles: File[]) => void
}

export const FileUploadField: FC<FileUploadFieldProps> = ({onDragEnter, onUpload}) => {

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop: onUpload, onDragEnter})

  return (
    <div {...getRootProps()} data-testid="file-upload-field">
      <input {...getInputProps()} />
      { isDragActive ?
        <p>Drop the files here ...</p> :
        <p>Drag n drop some files here, or click to select files</p>
      }
    </div>
  )
}