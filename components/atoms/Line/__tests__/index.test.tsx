import { render} from "@testing-library/react"
import { Line } from "../index"
import { LineProps } from "../types"

describe("Render line strips", () => {
  test("should render line strips", async () => {

    const lineProps: LineProps = {
      length: 100,
      orientation: "vertical",
      position: {
        x: 100,
        y: 200,
      },
    }

    const ui = (<Line {...lineProps} />)
    render(ui)
    // TODO: snapshot test
  })
})
