import { render} from "@testing-library/react"
import { ImagePreview } from "../index"

describe("Render image preview", () => {
  test("should render image preview", async () => {
  
    const ui = (<ImagePreview />)
    render(ui)
  
  })
})
