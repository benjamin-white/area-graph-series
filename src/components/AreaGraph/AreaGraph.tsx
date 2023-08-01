import { useMemo } from 'react'
import GraphAxes from '@/GraphAxes'
import AreaSlice from '@/AreaSlice'
import mapToGraphData from './lib/mapToGraphData'
import { AreaGraphProps } from './types'

const AreaGraph = ({ labels, data, axesRange, config }: AreaGraphProps) => {
  const graphData = useMemo(
    () => mapToGraphData(labels, data, axesRange, config),
    [data, labels, axesRange, config],
  )
  const sliceRotation: Vec3 = [0, Math.PI * 0.5, 0]
  const sliceWidth = 0.12

  return (
    <>
      <GraphAxes axes={graphData.axes} />
      {graphData.slices.map(({ location, color, points }) => (
        <AreaSlice
          location={location}
          rotation={sliceRotation}
          color={color}
          width={sliceWidth}
          points={points}
        />
      ))}
    </>
  )
}

export default AreaGraph
