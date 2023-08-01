import * as THREE from 'three'
import type { Meta } from '@storybook/react'
import ThreeDecorator from '@sb/decorators/ThreeDecorator'
import AreaGraph from '../'

const MAGNITUDE_X = 20
const MAGNITUDE_Y = 10
const MAGNITUDE_Z = -15

const labels = {
  x: ['Berlin', 'London', 'Paris', 'Brussels', 'Stockholm', 'Rome', 'Athens'],
  y: ['5,000', '6,000', '7,000', '8,000', '9,000', '10,000'],
  z: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
}
const data = new Array(7).fill([
  [1, 5_000],
  [1, 7_000],
  [2, 7_600],
  [3, 8_000],
  [4, 9_000],
  [5, 8_500],
  [6, 8_000],
  [7, 7_000],
  [8, 7_000],
  [9, 8_500],
  [10, 9_500],
  [11, 10_000],
  [12, 9_000],
  [12, 5_000],
])
const axesRange = {
  x: {
    min: 1,
    max: 12,
  },
  y: {
    min: 5_000,
    max: 10_000,
  },
}
const config = {
  sliceColor: '#5b90a3',
  sliceWidth: 0.12,
  axes: [
    {
      axis: 'x' as const,
      lineStart: [0, 0, 0] as Vec3,
      lineEnd: [MAGNITUDE_X, 0, 0] as Vec3,
      labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
      labelOffset: new THREE.Vector3(1, 1, 1.1),
      markerDirection: [0, -0.5, 0.5] as Vec3,
      magnitude: MAGNITUDE_X,
      withOffset: true,
      labelAnchor: {
        x: 'right' as const,
        y: 'middle' as const,
      },
    },
    {
      axis: 'y' as const,
      lineStart: [0, 0, 0] as Vec3,
      lineEnd: [0, MAGNITUDE_Y, 0] as Vec3,
      labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
      labelOffset: new THREE.Vector3(1, 1, 1.2),
      markerDirection: [0, 0, 1] as Vec3,
      magnitude: MAGNITUDE_Y,
      withOffset: false,
      labelAnchor: {
        x: 'right' as const,
        y: 'middle' as const,
      },
    },
    {
      axis: 'z' as const,
      lineStart: [0, 10, 0] as Vec3,
      lineEnd: [0, 10, MAGNITUDE_Z] as Vec3,
      labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
      labelOffset: new THREE.Vector3(1.2, 1, 1),
      markerDirection: [-2, 0, 0] as Vec3,
      magnitude: MAGNITUDE_Z,
      withOffset: false,
      labelAnchor: {
        x: 'center' as const,
        y: 'bottom' as const,
      },
    },
  ],
}

const meta: Meta<typeof AreaGraph> = {
  component: AreaGraph,
  title: 'Components/AreaGraph',
  args: {
    labels,
    data,
    axesRange,
    config,
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
