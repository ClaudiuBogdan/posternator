import { render, screen } from "@testing-library/react"
import {AppStyled} from "../global/styles"
import PosterCreator from "../pages/index"

describe("Poster creator", () => {
  it("renders a heading", () => {
    render(
      <AppStyled>
        <PosterCreator />
      </AppStyled>
    )

    const heading = screen.getByRole("heading", {
      name: /poster creator/i,
    })

    expect(heading).toBeInTheDocument()
  })
})