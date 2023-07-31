import * as THREE from 'three'
import { Extrude } from '@react-three/drei'
import { AreaSliceProps } from './types'

const getSliceVertices = (points: Vec2[]) => {
  const shape = new THREE.Shape()
  points.forEach((point, index) => {
    shape[!index ? 'moveTo' : 'lineTo'](...point)
  })
  return shape
}

const AreaSlice = ({
  location,
  rotation,
  points,
  width,
  color,
}: AreaSliceProps) => {
  const extrusionSettings = {
    depth: width,
    bevelEnabled: false,
  }
  return (
    <Extrude
      args={[getSliceVertices(points), extrusionSettings]}
      position={location ? new THREE.Vector3(...location) : undefined}
      rotation={rotation ? new THREE.Euler(...rotation) : undefined}
    >
      <meshStandardMaterial color={color || '#000'} side={2} />
    </Extrude>
  )
}

export default AreaSlice
