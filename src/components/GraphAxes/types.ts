import { Axis } from './components/Axis'

export type GraphAxes = {
  x?: Omit<Axis, 'orientation'>
  y?: Omit<Axis, 'orientation'>
  z?: Omit<Axis, 'orientation'>
}
