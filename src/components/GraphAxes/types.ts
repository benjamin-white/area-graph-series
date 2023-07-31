import { Axis } from './components/Axis'

export type GraphAxesProps = {
  x?: Omit<Axis, 'orientation'>
  y?: Omit<Axis, 'orientation'>
  z?: Omit<Axis, 'orientation'>
}
