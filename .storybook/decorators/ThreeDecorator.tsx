import React, { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'three'
import styles from './ThreeDecorator.module.css'

const CameraController = () => {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.minDistance = 3
    controls.maxDistance = 20

    return () => {
      controls.dispose()
    }
  }, [camera, gl])

  return null
}

const ThreeDecorator = ({
  children,
  globals,
}: {
  children: React.ReactNode
  globals: any
}) => {
  const gridHelper =
    globals.showGrid === 'Show' ? (
      <primitive object={new THREE.GridHelper(100, 100)} />
    ) : null
  const axesHelper =
    globals.showAxes === 'Show' ? (
      <primitive object={new THREE.AxesHelper(10)} />
    ) : null

  return (
    <div className={styles.ThreeDecorator}>
      <Canvas>
        <CameraController />
        {gridHelper}
        {axesHelper}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {children}
      </Canvas>
    </div>
  )
}

export default ThreeDecorator
