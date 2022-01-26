import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import BaseLink from './base-link'

export const BLUE_TEXT = 'text-blue-500'

interface IProps {
  href: string
  underline?: boolean
  className?: string
  children?: ReactNode
}

const BlueLink = ({ href, underline = true, className, children }: IProps) => (
  <BaseLink
    href={href}
    underline={underline}
    className={cn(BLUE_TEXT, className)}
  >
    {children}
  </BaseLink>
)

export default BlueLink
