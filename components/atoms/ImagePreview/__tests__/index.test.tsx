import { ImagePreview } from "../index"
import { render} from "@testing-library/react"

describe("Render image preview", () => {
  test("should render image preview", async () => {
  
    const ui = (<ImagePreview />)
    render(ui)
  
  })
})
