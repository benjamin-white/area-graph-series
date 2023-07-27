import type { Meta } from '@storybook/react'
import * as THREE from 'three'
import ThreeDecorator from '@sb/decorators/ThreeDecorator'
import sbArgsToTHREE from '@sb/utils/sbArgsToTHREE'
import fonts from '../fonts.ts'
import Text from '../'
import { ALIGNMENT, ANCHOR_X, ANCHOR_Y } from '../types.ts'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
  args: {
    position: new THREE.Vector3(0, 0, 0),
    textContent:
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.',
    typeface: 'Raleway',
    fontSize: 8,
    color: '#000',
    lineHeight: 1,
    maxWidth: 300,
    letterSpacing: 0,
    textAlign: 'justify',
    anchorX: 'center',
    anchorY: 'middle',
    rotation: new THREE.Euler(0, 0, 0),
    quaternion: new THREE.Quaternion(0, 0, 0, 0),
    scale: new THREE.Vector3(1, 1, 1),
  },
  argTypes: {
    typeface: {
      control: {
        type: 'select',
      },
      options: Object.keys(fonts),
    },
    textAlign: {
      control: {
        type: 'select',
      },
      options: ALIGNMENT,
    },
    anchorX: {
      control: {
        type: 'select',
      },
      options: ANCHOR_X,
    },
    anchorY: {
      control: {
        type: 'select',
      },
      options: ANCHOR_Y,
    },
    matrix: {
      control: false,
    },
  },
  decorators: [
    (Story, { globals }) => (
      <ThreeDecorator globals={globals}>
        <Story />
      </ThreeDecorator>
    ),
  ],
  render: (args) => (
    <Text
      {...args}
      position={sbArgsToTHREE.position(args.position)}
      rotation={sbArgsToTHREE.rotation(args.rotation)}
      quaternion={sbArgsToTHREE.quaternion(args.quaternion)}
      scale={sbArgsToTHREE.scale(args.scale)}
    />
  ),
}

export default meta
export const Default = {}
