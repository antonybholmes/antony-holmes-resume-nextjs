import { ReactNode } from 'react'
import cn from '../../lib/class-names'

interface IProps {
  href: string
  target?: string
  underline?: boolean
  className?: string
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
  children?: ReactNode
}

const ExtLink = ({
  href,
  target = '_blank',
  underline = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
}: IProps) => {
  if (children === undefined || children === null) {
    children = <>{href}</>
  }

  return (
    <a
      className={cn([underline, `hover:underline`], className)}
      href={href}
      target={target}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}

export default ExtLink
