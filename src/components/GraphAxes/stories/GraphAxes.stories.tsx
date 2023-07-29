import type { Meta } from '@storybook/react'
import ThreeDecorator from '../../../../.storybook/decorators/ThreeDecorator.tsx'
import GraphAxes from '../'

const meta: Meta<typeof GraphAxes> = {
  component: GraphAxes,
  title: 'Components/GraphAxes',
  args: {
    axes: {
      x: {
        line: {
          start: [0, 0, 0],
          end: [10, 0, 0],
        },
        labels: ['1990', '1991', '1992'],
        labelDirection: [0, 1, 0],
      },
      y: {
        line: {
          start: [0, 0, 0],
          end: [0, 10, 0],
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labelDirection: [0, 0, 1],
      },
      z: {
        line: {
          start: [0, 10, 0],
          end: [0, 10, -10],
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labelDirection: [-1, 0, 0],
      },
    },
  },
  decorators: [
    (Story, { globals }) => (
      <ThreeDecorator globals={globals}>
        <Story />
      </ThreeDecorator>
    ),
  ],
  render: (args) => <GraphAxes {...args} />,
}

export default meta
export const Default = {}
