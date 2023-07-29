import { render, screen } from '@testing-library/react'
import GraphAxes from '../'

describe('GraphAxes', () => {
  it.skip('renders a GraphAxes component', () => {
    const { container } = render(
      <GraphAxes
        axes={{
          x: undefined,
          y: undefined,
          z: undefined,
        }}
      />,
    )

    expect(screen.getByText('Prop')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
