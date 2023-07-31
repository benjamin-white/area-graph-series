import type { Meta } from '@storybook/react'
import ThreeDecorator from '@sb/decorators/ThreeDecorator'
import AreaSlice from '../'

const meta: Meta<typeof AreaSlice> = {
  component: AreaSlice,
  title: 'Components/AreaSlice',
  args: {
    location: [0, 0, 0],
    rotation: [0, 0, 0],
    points: [
      [0, 0],
      [1, 0],
      [1, 1],
      [0.6, 1.2],
      [0.4, 1.1],
      [0, 1],
      [0, 0],
    ],
    width: 0.12,
    color: '#5b90a3',
  },
  decorators: [
    (Story, { globals }) => (
      <ThreeDecorator globals={globals}>
        <Story />
      </ThreeDecorator>
    ),
  ],
}

export default meta
export const Default = {}
