declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    ['geometry']?: THREE.BufferGeometry<THREE.NormalBufferAttributes>
  }
}

import { Axis } from './components/Axis'

export type GraphAxesProps = {
  x?: Omit<Axis, 'orientation'>
  y?: Omit<Axis, 'orientation'>
  z?: Omit<Axis, 'orientation'>
}
