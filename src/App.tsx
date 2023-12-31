import * as THREE from 'three'
import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Layout from '@/Layout'
import AreaGraph from '@/AreaGraph'
import CameraController from '@/CameraContoller'
import loadData from './lib/loadData'
import processData from './lib/processData'
import { AreaGraphProps } from '@/AreaGraph/types'

const MAGNITUDE_X = 20
const MAGNITUDE_Y = 10
const MAGNITUDE_Z = -15

const config = {
  sliceColor: '#5b90a3',
  sliceWidth: 0.12,
  axes: [
    {
      axis: 'x' as const,
      lineStart: [0, 0, 0] as Vec3,
      lineEnd: [MAGNITUDE_X, 0, 0] as Vec3,
      labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
      labelOffset: new THREE.Vector3(1, 1, 1.1),
      markerDirection: [0, -0.5, 0.5] as Vec3,
      magnitude: MAGNITUDE_X,
      withOffset: true,
      labelAnchor: {
        x: 'right' as const,
        y: 'middle' as const,
      },
    },
    {
      axis: 'y' as const,
      lineStart: [0, 0, 0] as Vec3,
      lineEnd: [0, MAGNITUDE_Y, 0] as Vec3,
      labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
      labelOffset: new THREE.Vector3(1, 1, 1.2),
      markerDirection: [0, 0, 1] as Vec3,
      magnitude: MAGNITUDE_Y,
      withOffset: false,
      labelAnchor: {
        x: 'right' as const,
        y: 'middle' as const,
      },
    },
    {
      axis: 'z' as const,
      lineStart: [0, 10, 0] as Vec3,
      lineEnd: [0, 10, MAGNITUDE_Z] as Vec3,
      labelRotation: new THREE.Euler(0, Math.PI * 0.5, 0),
      labelOffset: new THREE.Vector3(1.2, 1, 1),
      markerDirection: [-2, 0, 0] as Vec3,
      magnitude: MAGNITUDE_Z,
      withOffset: false,
      labelAnchor: {
        x: 'center' as const,
        y: 'bottom' as const,
      },
    },
  ],
}

const App = () => {
  const [data, setData] = useState<Omit<AreaGraphProps, 'config'> | null>(null)

  useEffect(() => {
    const load = async () => {
      setData(processData(await loadData('populations.csv')))
    }
    void load()
  }, [])

  return (
    <Layout>
      {data !== null ? (
        <Canvas>
          <CameraController />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <AreaGraph
            labels={data.labels}
            data={data.data}
            axesRange={data.axesRange}
            config={config}
          />
        </Canvas>
      ) : (
        'Loading...'
      )}
    </Layout>
  )
}

export default App
