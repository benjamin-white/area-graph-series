import type { GraphAxes } from './types'
import * as THREE from 'three'
import THREEText from '@/Text'

// labelDirection is also length!!!!!

type Vec3 = [number, number, number]

const Label = ({
  location,
  text,
  direction: dir,
}: {
  location: Vec3
  text: string
  direction: Vec3
}) => {
  const points = []

  const start = new THREE.Vector3(...location)
  const direction = new THREE.Vector3(...dir)

  points.push(start)
  points.push(new THREE.Vector3(0, 0, 0).addVectors(start, direction))

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points) // <- memo?
  return (
    <>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          attach="material"
          color="#aaa"
          linewidth={10}
          linecap={'round'}
          linejoin={'round'}
        />
      </line>
      <THREEText
        position={points[1]}
        textContent={text}
        typeface={'Roboto'}
        fontSize={0.2}
      />
    </>
  )
}

export type Axis = {
  orientation: 'x' | 'y' | 'z'
  line: {
    start: [number, number, number]
    end: [number, number, number]
  }
  labels: string[]
  labelDirection: [number, number, number]
}

const Axis = ({ axis }: { axis: Axis }) => {
  const points = []
  points.push(new THREE.Vector3(...axis.line.start))
  points.push(new THREE.Vector3(...axis.line.end))

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points) // <- memo?

  const labelStep = points[0].distanceTo(points[1]) / axis.labels.length || 1
  // ^ refactor out the || 0, only added to avoid / by 0

  return (
    <>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          attach="material"
          color="#aaa"
          linewidth={10}
          linecap={'round'}
          linejoin={'round'}
        />
      </line>
      {axis.labels.length &&
        axis.labels.map((label, index) => {
          // * -1
          const labelAxisPlacement = labelStep * (index + 1)
          const loc: [number, number, number] = [...axis.line.start]
          if (axis.orientation == 'x') {
            loc[0] = labelAxisPlacement
          } else if (axis.orientation == 'y') {
            loc[1] = labelAxisPlacement
          } else {
            loc[2] = labelAxisPlacement
          }
          return (
            <Label
              location={loc}
              text={label}
              direction={axis.labelDirection}
            />
          )
        })}
    </>
  )
}

const GraphAxes = ({ axes }: { axes: GraphAxes }) => {
  return (
    <>
      {axes.x && <Axis axis={{ ...axes.x, orientation: 'x' }} />}
      {axes.y && <Axis axis={{ ...axes.y, orientation: 'y' }} />}
      {axes.z && <Axis axis={{ ...axes.z, orientation: 'z' }} />}
    </>
  )
}

export default GraphAxes
