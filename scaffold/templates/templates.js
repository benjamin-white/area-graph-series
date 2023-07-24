const TEMPLATES = {
  index: `export { default } from './__NAME__'`,
  component: `import { __NAME__Props } from './types'

const __NAME__ = ({ prop }: __NAME__Props) => <h1>{prop}</h1>

export default __NAME__
`,
  types: `export type __NAME__Props = {
  prop: string
}
`,
  stories: `
import type { Meta } from '@storybook/react'
import __NAME__ from '../'

const meta: Meta<typeof __NAME__> = {
  component: __NAME__,
  title: 'Components/__NAME__',
  args: {
    prop: 'Prop',
  },
}

export default meta
export const Default = {}
`,
  test: `import { render, screen } from '@testing-library/react'
import __NAME__ from '../'

describe('__NAME__', () => {
  it('renders a __NAME__ component', () => {
    const { container } = render(<__NAME__ prop="Prop" />)

    expect(screen.getByText('Prop')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
`,
}

export default {
  index: {
    path: 'index.ts',
    content: TEMPLATES.index,
  },
  component: {
    path: '__NAME__.tsx',
    content: TEMPLATES.component,
  },
  types: {
    path: 'types.ts',
    content: TEMPLATES.types,
  },
  stories: {
    path: 'stories/__NAME__.stories.tsx',
    content: TEMPLATES.stories,
  },
  test: {
    path: 'test/__NAME__.test.tsx',
    content: TEMPLATES.test,
  },
}
