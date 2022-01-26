import cn from '../../lib/class-names'
import ILinkProps from '../../types/link-props'
import IndexLink from './index-link'

const BlueIndexLink = ({ href, className, children }: ILinkProps) => (
  <IndexLink href={href} className={cn('text-sky-400', className)}>
    {children}
  </IndexLink>
)

export default BlueIndexLink
