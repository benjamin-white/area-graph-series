import * as THREE from 'three'

const sbArgsToTHREE = {
  rotation: (sbRotation?: unknown) => {
    const rotationFromArgs = sbRotation as {
      _x: number
      _y: number
      _z: number
    }
    return new THREE.Euler(
      +rotationFromArgs._x ?? 0,
      +rotationFromArgs._y ?? 0,
      +rotationFromArgs._z ?? 0,
    )
  },
  position: (sbPosition?: unknown) => {
    const positionFromArgs = sbPosition as {
      x: number
      y: number
      z: number
    }
    return new THREE.Vector3(
      +positionFromArgs.x ?? 0,
      +positionFromArgs.y ?? 0,
      +positionFromArgs.z ?? 0,
    )
  },
  quaternion: (sbQuaternion?: unknown) => {
    const quaternionFromArgs = sbQuaternion as [number, number, number, number]
    return !Array.isArray(quaternionFromArgs) ||
      !quaternionFromArgs.filter(Boolean).length
      ? undefined
      : new THREE.Quaternion(
          +quaternionFromArgs[0],
          +quaternionFromArgs[1],
          +quaternionFromArgs[2],
          +quaternionFromArgs[3],
        )
  },
  scale: (sbScale?: unknown) => {
    const scaleFromArgs = sbScale as {
      x: number
      y: number
      z: number
    }
    return new THREE.Vector3(
      +scaleFromArgs.x ?? 1,
      +scaleFromArgs.y ?? 1,
      +scaleFromArgs.z ?? 1,
    )
  },
}

export default sbArgsToTHREE
