import { ReactThreeFiber } from '@react-three/fiber'
import fonts from './fonts.ts'

type Typeface = keyof typeof fonts

export const ALIGNMENT = ['center', 'justify', 'left', 'right'] as const
export const ANCHOR_X = ['center', 'left', 'right'] as const
export const ANCHOR_Y = [
  'middle',
  'bottom',
  'top',
  'top-baseline',
  'bottom-baseline',
] as const

export type TextProps = {
  position?: THREE.Vector3
  textContent: string
  typeface: Typeface
  fontSize?: number
  color?: string
  lineHeight?: number
  maxWidth?: number
  letterSpacing?: number
  textAlign?: (typeof ALIGNMENT)[number]
  anchorX?: (typeof ANCHOR_X)[number] | number
  anchorY?: (typeof ANCHOR_Y)[number] | number
  rotation?: ReactThreeFiber.Euler
  quaternion?: ReactThreeFiber.Quaternion
  scale?: ReactThreeFiber.Vector3
  matrix?: ReactThreeFiber.Matrix4
}
