import { FC, useState } from "react"
import "react-image-crop/dist/ReactCrop.css"
import ReactCrop, { Crop } from "react-image-crop"
import { ImageCropperProps } from "./types"

export const ImageCropper: FC<ImageCropperProps> = ({src}) => {
  const [crop, setCrop] = useState<Crop>()
  return (
    <ReactCrop crop={crop} onChange={c => setCrop(c)} >
      <img src={src} />
    </ReactCrop>
  )
}