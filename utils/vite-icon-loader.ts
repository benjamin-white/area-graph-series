import { IndexHtmlTransformHook } from 'vite'

const iconLoader = (): {
  name: string
  transformIndexHtml: IndexHtmlTransformHook
} => {
  return {
    name: 'html-transform',
    transformIndexHtml() {
      return [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#ffffff',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/svg+xml',
            href: 'app-icons/favicon.svg',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'mask-icon',
            href: 'app-icons/icon.svg',
            color: '#FFFFFF',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: 'app-icons/apple-touch-icon.png',
            sizes: '180x180',
          },
        },
      ]
    },
  }
}

export default iconLoader
