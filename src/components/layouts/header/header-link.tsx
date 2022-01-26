import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import cn from '../../../lib/class-names'
import BaseLink from '../../link/base-link'
import ILink from '../../../types/link'
import { CLS_TEXT_GRAY_HOVER } from '../../../lib/constants'

const DURATION = 0.4
const BAR_WIDTH = '2px'

type IProps = {
  link: ILink
  selected: boolean
  onClick?: any
}

const HeaderLink = ({ link, selected, onClick }: IProps) => {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    let t1 = gsap.timeline()

    if (hover) {
      t1.to(
        ref.current,
        {
          width: '100%',
          duration: DURATION,
          ease: 'power3.out',
        },
        0
      )
        .to(
          ref.current,
          {
            x: 10,
            delay: 0.2,
            duration: DURATION,
            ease: 'back.out(1)',
          },
          0
        )
        .to(
          ref.current,
          {
            x: 0,
            duration: DURATION,
            delay: 0.4,
            ease: 'power3.out',
          },
          0
        )
        .play()
    } else {
      t1.to(
        ref.current,
        {
          width: 0,
          duration: DURATION,
          ease: 'power3.out',
        },
        0
      ).play()
    }
  }, [hover])

  const _handleMouseEnter = () => {
    setHover(true && !selected)
  }

  const _handleMouseLeave = () => {
    setHover(false && !selected)
  }

  return (
    <BaseLink
      href={link.url}
      className={cn(
        `block relative text-sm font-bold tracking-tight py-2 animate-button`,
        [selected, 'text-blue-500', 'text-slate-400 hover:text-blue-500']
      )}
      onClick={onClick}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
    >
      {link.name}

      <div
        ref={ref}
        className="absolute w-0 bottom-0 bg-blue-500"
        style={{ height: BAR_WIDTH }}
      />
    </BaseLink>
  )
}

export default HeaderLink
