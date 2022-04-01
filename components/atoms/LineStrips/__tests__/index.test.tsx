import { render} from "@testing-library/react"
import { LineStrips } from "../index"

describe("Render line strips", () => {
  test("should render line strips", async () => {

    const ui = (<LineStrips />)
    render(ui)
    // TODO: snapshot test
  })
})
