import { ReactNode } from 'react'
import cn from '../lib/class-names'

interface IProps {
  title: string
  subtitle?: string
  className?: string
  children?: ReactNode
}

const PageTitle = ({ title, subtitle = '', className, children }: IProps) => (
  <header className={cn('mb-16', className)}>
    <h1 className="text-5xl font-bold">{title}</h1>

    {subtitle !== '' && (
      <h2 className="text-2xl mt-4 font-light tracking-wide uppercase">
        {subtitle}
      </h2>
    )}
    {children !== undefined && children !== null && (
      <h2 className="text-2xl mt-4">{children}</h2>
    )}
  </header>
)

export default PageTitle
