export type SliceData = { location: Vec3; color: string; points: Vec2[] }

type AxisRange = { min: number; max: number }

export type AreaGraphProps = {
  labels: {
    x: string[]
    y: string[]
    z: string[]
  }
  data: Vec2[][]
  axesRange: {
    x: AxisRange
    y: AxisRange
  }
  config: {
    sliceColor: string
    sliceWidth: number
    axes: {
      axis: 'x' | 'y' | 'z'
      lineStart: Vec3
      lineEnd: Vec3
      labelRotation: THREE.Euler
      labelOffset: THREE.Vector3
      markerDirection: Vec3
      magnitude: number
      withOffset: boolean
      labelAnchor: {
        x: 'center' | 'left' | 'right'
        y: 'middle' | 'bottom' | 'top' | 'top-baseline' | 'bottom-baseline'
      }
    }[]
  }
}
