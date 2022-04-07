import { FC, useEffect, useState } from "react"
import { RadioInput } from "components/atoms/RadioInput"
import { printOrientations } from "./data"
import { PrintOrientationPickerStyled as PrintOrientationPickerStyled } from "./styles"
import { PrintOrientation, PrintOrientationPickerProps } from "./types"

export const PrintOrientationPicker: FC<PrintOrientationPickerProps> = ({onChange}) => {
  const [selectedOrientation, setSelectedOrientation] = useState<PrintOrientation>("vertical")

  useEffect(() => {
    onChange && onChange(selectedOrientation)
  }, [selectedOrientation, onChange])

  const handleOrientationSelected = (orientation: string) => {
    setSelectedOrientation(orientation as PrintOrientation)
  }

  return (
    <PrintOrientationPickerStyled>
      <p>Select print orientation: </p>

      {printOrientations.map((printFormat) => (
        <RadioInput
          key={printFormat.id}
          id={printFormat.id}
          name={printFormat.name}
          checked={printFormat.name === selectedOrientation}
          onOptionClick={handleOrientationSelected}
          label={printFormat.label} />
      ))}
    </PrintOrientationPickerStyled>
  )
}

export type {PrintOrientation}