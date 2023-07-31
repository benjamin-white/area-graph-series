import type { GraphAxesProps } from './types'
import Axis from './components/Axis'

const GraphAxes = ({ axes }: { axes: GraphAxesProps }) => {
  return (
    <>
      {axes.x && <Axis axis={{ ...axes.x, orientation: 'x' }} />}
      {axes.y && <Axis axis={{ ...axes.y, orientation: 'y' }} />}
      {axes.z && <Axis axis={{ ...axes.z, orientation: 'z' }} />}
    </>
  )
}

export default GraphAxes
