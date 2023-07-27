import { TextProps } from './types'
import { Text as DreiText } from '@react-three/drei'
import fonts from './fonts.ts'

const Text = ({
  textContent,
  position,
  typeface,
  fontSize = 12,
  color = '#000',
  lineHeight = 1,
  maxWidth,
  letterSpacing = 0,
  textAlign = 'left',
  anchorX = 'center',
  anchorY = 'middle',
  rotation,
  quaternion,
  scale,
  matrix,
}: TextProps) => (
  <DreiText
    position={position}
    font={fonts[typeface]}
    color={color}
    fontSize={fontSize}
    lineHeight={lineHeight}
    maxWidth={maxWidth}
    letterSpacing={letterSpacing}
    textAlign={textAlign}
    anchorX={anchorX}
    anchorY={anchorY}
    rotation={rotation}
    quaternion={quaternion}
    scale={scale}
    matrix={matrix}
  >
    {textContent}
  </DreiText>
)

export default Text
