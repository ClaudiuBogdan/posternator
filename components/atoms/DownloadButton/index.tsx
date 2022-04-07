import { FC } from "react"
import { DownloadButtonProps } from "./types"

export const DownloadButton: FC<DownloadButtonProps> = ({children, onClick, disabled}) => {
  return (
    <button {...{
      onClick,
      disabled,
    }}>
      {children}
    </button>
  )
}