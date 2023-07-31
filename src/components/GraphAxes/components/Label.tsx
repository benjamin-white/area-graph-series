import * as THREE from 'three'
import THREEText from '@/Text'
import { ANCHOR_X, ANCHOR_Y } from '@/Text/types'

type Label = {
  location: Vec3
  text: string
  direction: Vec3
  anchor: {
    x: (typeof ANCHOR_X)[number]
    y: (typeof ANCHOR_Y)[number]
  }
  labelRotation?: THREE.Euler
  labelOffset: THREE.Vector3
}

const Label = ({
  location,
  text,
  direction: dir,
  anchor,
  labelRotation,
  labelOffset,
}: Label) => {
  const points = []
  const start = new THREE.Vector3(...location)
  const direction = new THREE.Vector3(...dir)
  points.push(start)
  points.push(new THREE.Vector3(0, 0, 0).addVectors(start, direction))
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <>
      <line geometry={lineGeometry}>
        <lineBasicMaterial
          attach="material"
          color="#aaa"
          linewidth={1}
          linecap={'round'}
          linejoin={'round'}
        />
      </line>
      <THREEText
        position={points[1].multiply(labelOffset)}
        textContent={text}
        typeface={'Roboto'}
        fontSize={0.3}
        anchorX={anchor.x}
        anchorY={anchor.y}
        rotation={labelRotation}
      />
    </>
  )
}

export default Label
