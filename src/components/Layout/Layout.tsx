import { LayoutProps } from './types'
import clsx from 'clsx'

const Layout = ({ children, className }: LayoutProps) => (
  <div className={clsx('site-wrap', className)}>
    <div className="container">{children}</div>
  </div>
)

export default Layout
