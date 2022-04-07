import { render} from "@testing-library/react"
import { ImageInput } from "../index"

describe("Render image preview", () => {
  test("should render image preview", async () => {

    const ui = (<ImageInput />)
    render(ui)

  })
})
