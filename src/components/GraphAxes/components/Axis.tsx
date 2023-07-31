import { useMemo } from 'react'
import * as THREE from 'three'
import Label from './Label'
import { ANCHOR_X, ANCHOR_Y } from '@/Text/types'

export type Axis = {
  orientation: 'x' | 'y' | 'z'
  line: {
    start: Vec3
    end: Vec3
  }
  markers: {
    labels: string[]
    direction: Vec3
    anchor: {
      x: (typeof ANCHOR_X)[number]
      y: (typeof ANCHOR_Y)[number]
    }
    labelRotation?: THREE.Euler
    labelOffset: THREE.Vector3
  }
}

const axisToIndex = {
  x: 0,
  y: 1,
  z: 2,
}

const getMarkerLocation = (
  step: number,
  markerIndex: number,
  initialPosition: Vec3,
  direction: -1 | 1,
  orientation: Axis['orientation'],
) => {
  const location: Vec3 = [...initialPosition]
  location[axisToIndex[orientation]] = step * (markerIndex + 1) * direction
  return location
}

const Axis = ({ axis: { line, markers, orientation } }: { axis: Axis }) => {
  const points = useMemo(
    () => [new THREE.Vector3(...line.start), new THREE.Vector3(...line.end)],
    [line.start, line.end],
  )

  const lineGeometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points),
    [points],
  )

  const labelStep = points[0].distanceTo(points[1]) / markers.labels.length || 1
  const directionSign = line.end[axisToIndex[orientation]] < 0 ? -1 : 1

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
      {markers.labels.map((label, index) => (
        <Label
          location={getMarkerLocation(
            labelStep,
            index,
            [...line.start],
            directionSign,
            orientation,
          )}
          text={label}
          direction={markers.direction}
          anchor={markers.anchor}
          labelRotation={markers.labelRotation}
          labelOffset={markers.labelOffset}
        />
      ))}
    </>
  )
}

export default Axis
