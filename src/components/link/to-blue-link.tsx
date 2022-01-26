import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import BaseButtonLink from './base-button-link'
import { BLUE_TEXT } from './blue-link'

interface IProps {
  href: string
  className?: string
  children?: ReactNode
}

const ToBlueLink = ({ href, className, children }: IProps) => (
  <BaseButtonLink href={href} className={cn(`hover:${BLUE_TEXT}`, className)}>
    {children}
  </BaseButtonLink>
)

export default ToBlueLink
