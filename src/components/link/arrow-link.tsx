import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'
import BaseLink from './base-link'
import VCenterRow from '../v-center-row'

interface IProps {
  href: string
  className?: string
  children?: ReactNode
}

const ArrowLink = ({ href, className, children }: IProps) => (
  <VCenterRow className={className}>
    <BaseLink href={href} underline={true}>
      {children}
    </BaseLink>
    <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
  </VCenterRow>
)

export default ArrowLink
