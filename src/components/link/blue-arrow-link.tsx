import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import BaseLink from './base-link'
import VCenterRow from '../v-center-row'
import ArrowLink from './arrow-link'
import cn from '../../lib/class-names'

interface IProps {
  href: string
  className?: string
  children?: ReactNode
}

const BlueArrowLink = ({ href, className, children }: IProps) => (
  <ArrowLink href={href} className={cn('text-blue-500', className)}>
    {children}
  </ArrowLink>
)

export default BlueArrowLink
