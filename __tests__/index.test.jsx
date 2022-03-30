import { render, screen } from '@testing-library/react'
import PosterCreator from '../pages/index'

describe('Poster creator', () => {
  it('renders a heading', () => {
    render(<PosterCreator />)

    const heading = screen.getByRole('heading', {
        name: /poster creator/i,
    })

    expect(heading).toBeInTheDocument()
  })
})