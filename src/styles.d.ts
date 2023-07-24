import 'react'

type CSSCustomProperties = { [key in `--${string}`]: string | number }

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CSSProperties extends CSSCustomProperties {}
}
