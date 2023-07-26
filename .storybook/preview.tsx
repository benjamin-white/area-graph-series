import React from 'react'
import type { Preview } from '@storybook/react'
import StylesDecorator from './decorators/StylesDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    showGrid: {
      description: 'Render 3d grid plane helper',
      defaultValue: 'Show',
      toolbar: {
        title: '3d Plane',
        items: ['Show', 'Hide'],
      },
    },
    showAxes: {
      description: 'Render 3d axes helper',
      defaultValue: 'Show',
      toolbar: {
        title: '3d Axes',
        items: ['Show', 'Hide'],
      },
    },
  },
  decorators: [
    (Story) => (
      <StylesDecorator>
        <Story />
      </StylesDecorator>
    ),
  ],
}

export default preview
