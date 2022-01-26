import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, ReactNode, useEffect } from 'react'
import cn from '../../lib/class-names'
import BaseLink from './base-link'
import { gsap } from 'gsap'

interface IProps {
  href: string
  className?: string
  children?: ReactNode
}

const IndexLink = ({ href, className, children }: IProps) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        iconEl.current,
        { x: hover ? '0.15rem' : 0, ease: 'power3.out', duration: 0.2 },
        0
      )
  }, [hover])

  const _handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const _handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <BaseLink
      href={href}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      className={cn('flex flex-row items-center', className)}
    >
      {children}

      <div ref={iconEl} className="ml-2">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </BaseLink>
  )
}

export default IndexLink
