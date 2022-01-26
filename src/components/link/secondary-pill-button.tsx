import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import PillButtonLink from './pill-button-link'

interface IProps {
  href: string
  className?: string
  children?: ReactNode
}

const SecondaryPillButtonLink = ({ href, className, children }: IProps) => (
  <PillButtonLink
    href={href}
    className={cn(
      'border border-solid border-slate-200 hover:bg-slate-100',
      className
    )}
  >
    {children}
  </PillButtonLink>
)

export default SecondaryPillButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
