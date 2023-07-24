import { IndexHtmlTransformHook } from 'vite'
import { type Fonts } from '../src/styles/google-fonts'

const fontLoader = (
  fonts: Fonts,
): {
  name: string
  transformIndexHtml: IndexHtmlTransformHook
} => {
  return {
    name: 'html-transform',
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        ...fonts.map((font) => ({
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: `https://fonts.googleapis.com/css2?family=${
              font.familyName
            }:wght@${font.weights.join(';')}&display=swap`,
          },
        })),
      ]
    },
  }
}

export default fontLoader
