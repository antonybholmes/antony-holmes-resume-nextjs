import ILinkProps from '../../types/link-props'
import BaseLink from './base-link'

const UnderlineLink = ({ href, className, children }: ILinkProps) => (
  <BaseLink href={href} underline={true} className={className}>
    {children}
  </BaseLink>
)

export default UnderlineLink
