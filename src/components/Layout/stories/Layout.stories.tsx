import type { Meta } from '@storybook/react'
import Layout from '../'

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: 'Components/Layout',
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => (
    <Layout className={args.className}>
      Content inside a Layout component
    </Layout>
  ),
}

export default meta
export const Default = {}
