import { render, screen } from "@testing-library/react"
import PosterCreator from "../pages/index"
import { AppStyled  } from "../pages/_styles"

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