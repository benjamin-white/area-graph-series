import { render, screen } from '@testing-library/react'
import Layout from '../'

describe('Layout', () => {
  it('renders a Layout component', () => {
    const { container } = render(<Layout>Lorem ipsum</Layout>)

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('accepts a className prop', () => {
    const { container } = render(
      <Layout className="class-name">Lorem ipsum</Layout>,
    )

    expect(container.firstChild).toHaveClass('class-name')
  })
})
