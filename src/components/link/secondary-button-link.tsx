import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import BaseLink from './base-link'
import { BUTTON_CLASSES } from './blue-button-link'

export const SECONDARY_BUTTON_CLASSES =
  'border border-solid border-slate-200  hover:bg-slate-100'

interface IProps {
  href: string
  className?: string
  children?: ReactNode
}

const SecondaryButtonLink = ({ href, className, children }: IProps) => (
  <BaseLink
    href={href}
    className={cn(BUTTON_CLASSES, SECONDARY_BUTTON_CLASSES, className)}
  >
    {children}
  </BaseLink>
)

export default SecondaryButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
