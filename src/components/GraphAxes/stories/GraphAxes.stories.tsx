import type { Meta } from '@storybook/react'
import ThreeDecorator from '../../../../.storybook/decorators/ThreeDecorator.tsx'
import GraphAxes from '../'
import * as THREE from 'three'

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
        markers: {
          labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996'],
          direction: [0, 0.5, 0],
          anchor: {
            x: 'right',
            y: 'bottom',
          },
          labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
          labelOffset: new THREE.Vector3(1, 1.1, 1),
          withOffset: true,
        },
      },
      y: {
        line: {
          start: [0, 0, 0],
          end: [0, 10, 0],
        },
        markers: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          direction: [0, 0, 1],
          anchor: {
            x: 'right',
            y: 'middle',
          },
          labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
          labelOffset: new THREE.Vector3(1, 1, 1.2),
        },
      },
      z: {
        line: {
          start: [0, 10, 0],
          end: [0, 10, -10],
        },
        markers: {
          labels: [
            '10,000',
            '20,000',
            '30,000',
            '40,000',
            '50,000',
            '60,000',
            '70,000',
          ],
          direction: [-2, 0, 0],
          anchor: {
            x: 'center',
            y: 'bottom',
          },
          labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
          labelOffset: new THREE.Vector3(1.2, 1, 1),
        },
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
