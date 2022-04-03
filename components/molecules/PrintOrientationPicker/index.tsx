import { FC, useState } from "react"
import { RadioInput } from "components/atoms/RadioInput"
import { PrintOrientationPickerStyled as PrintOrientationPickerStyled } from "./styles"

type PrintOrientationPickerProps = {

}

export const PrintOrientationPicker: FC<PrintOrientationPickerProps> = () => {
  const [selectedOrientation, setSelectedOrientation] = useState("print-orientation-vertical")
  const printOrientations = [
    {
      id: "print-orientation-vertical",
      label: "Vertical",
    },
    {
      id: "print-orientation-horizontal",
      label: "Horizontal",
    },
  ]

  const handleOrientationSelected = (orientation: string) => {
    setSelectedOrientation(orientation)
  }

  return (
    <PrintOrientationPickerStyled>
      <p>Select print orientation: </p>

      {printOrientations.map((printFormat) => (
        <RadioInput
          key={printFormat.id}
          id={printFormat.id}
          checked={printFormat.id === selectedOrientation}
          onOptionClick={handleOrientationSelected}
          label={printFormat.label} />
      ))}
    </PrintOrientationPickerStyled>
  )
}