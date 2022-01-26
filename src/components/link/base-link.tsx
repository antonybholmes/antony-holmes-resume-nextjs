import Link from 'next/link'
import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import ExtLink from './ext-link'

interface IProps {
  href: string
  aria?: string
  underline?: boolean
  target?: string
  className?: string
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  children?: ReactNode
}

const BaseLink = ({
  href = '',
  target = '_blank',
  aria = '',
  underline = false,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}: IProps) => {
  // Test if we use the NextJS router link or a regular a for external urls
  const isExt =
    !href.startsWith('/') || href.startsWith('http') || href.startsWith('www')

  if (isExt) {
    return (
      <ExtLink
        href={href}
        aria-label={aria}
        className={className}
        underline={underline}
        target={target}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </ExtLink>
    )
  } else {
    if (children === undefined || children === null) {
      children = <>{href}</>
    }

    return (
      <Link href={href} aria-label={aria}>
        <a
          className={cn([underline, `hover:underline`], className)}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
        </a>
      </Link>
    )
  }
}

export default BaseLink
