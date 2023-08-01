import * as THREE from 'three'
import { type GraphAxesProps } from '@/GraphAxes'
import { type AreaGraphProps } from '../types'
import { type SliceData } from '../types'

const getSlicelocation = (
  sliceAxisLength: number,
  totalSlices: number,
  sliceWidth: number,
  currentSliceIndex: number,
  withInitialOffset?: boolean,
): Vec3 => {
  const sliceAxisStep = sliceAxisLength / totalSlices
  const sliceAxisInitialOffset = sliceAxisStep
  const slicePosition =
    sliceAxisStep * currentSliceIndex +
    (withInitialOffset ? sliceAxisInitialOffset : 0) -
    sliceWidth / 2

  return [slicePosition, 0, 0]
}

const scalePointByAxisRange = (
  point: Vec2,
  axesRange: AreaGraphProps['axesRange'],
  magnitudeY: number,
  magnitudeZ: number,
) =>
  point.map((xOrY, index) => {
    const isXAxis = !index
    return THREE.MathUtils.mapLinear(
      xOrY,
      isXAxis ? axesRange.x.min : axesRange.y.min,
      isXAxis ? axesRange.x.max : axesRange.y.max,
      0,
      Math.abs(isXAxis ? magnitudeZ : magnitudeY),
    )
  }) as Vec2

type mapToGraphData = (
  labels: AreaGraphProps['labels'],
  data: AreaGraphProps['data'],
  axesRange: AreaGraphProps['axesRange'],
  config: AreaGraphProps['config'],
) => {
  axes: GraphAxesProps
  slices: SliceData[]
}

const mapToGraphData: mapToGraphData = (labels, data, axesRange, config) => ({
  axes: config.axes.reduce<GraphAxesProps>((acc, { axis, ...rest }) => {
    acc[axis] = {
      line: {
        start: rest.lineStart,
        end: rest.lineEnd,
      },
      markers: {
        labels: labels[axis],
        direction: rest.markerDirection,
        anchor: rest.labelAnchor,
        labelRotation: rest.labelRotation,
        labelOffset: rest.labelOffset,
        withOffset: rest.withOffset,
      },
    }
    return acc
  }, {}),
  slices: data.map((points: Vec2[], index: number) => ({
    location: getSlicelocation(
      config.axes[0].magnitude,
      data.length,
      config.sliceWidth,
      index,
      config.axes[0].withOffset,
    ),
    color: config.sliceColor,
    points: points.map((point) =>
      scalePointByAxisRange(
        point,
        axesRange,
        config.axes[1].magnitude,
        config.axes[2].magnitude,
      ),
    ),
  })),
})

export default mapToGraphData
