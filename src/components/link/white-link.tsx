import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

const WhiteLink = ({ href, className, children }: ILinkProps) => (
  <BaseLink href={href} className={cn('text-white', className)}>
    {children}
  </BaseLink>
)

export default WhiteLink
