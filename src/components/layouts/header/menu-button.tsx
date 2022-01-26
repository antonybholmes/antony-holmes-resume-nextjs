import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import cn from '../../../lib/class-names'

const DURATION = 0.25
const BAR_WIDTH = '0.1rem'

type IProps = {
  isVisible: boolean
  onClick: any
}

const MenuButton = ({ isVisible, onClick }: IProps) => {
  const [hover, setHover] = useState(false)

  useEffect(() => {
    let t1 = gsap.timeline()

    if (isVisible) {
      t1.to(
        '#bar1',
        {
          top: '50%',
          duration: DURATION,
          ease: 'power3.out',
        },
        0
      )
        .to(
          '#bar3',
          {
            top: '50%',
            duration: DURATION,
            ease: 'power3.out',
          },
          0
        )
        // .to(
        //   "#bar2",
        //   {
        //     opacity: 0,
        //     duration: DURATION,
        //     ease: "power3.out",
        //   },
        //   0
        // )
        .to(
          '#bar1',
          {
            rotate: 45,
            duration: DURATION,
            ease: 'power3.out',
          },
          DURATION
        )
        .to(
          '#bar3',
          {
            rotate: -45,
            duration: DURATION,
            ease: 'power3.out',
          },
          DURATION
        )
        .pause()
    } else {
      t1.to(
        '#bar1',
        {
          rotate: 0,
          duration: DURATION,
          ease: 'power3.out',
        },
        0
      )
        .to(
          '#bar3',
          {
            rotate: 0,
            duration: DURATION,
            ease: 'power3.out',
          },
          0
        )
        .to(
          '#bar1',
          {
            top: 0,
            duration: DURATION,
            ease: 'power3.out',
          },
          DURATION
        )
        .to(
          '#bar3',
          {
            top: '100%',
            duration: DURATION,
            ease: 'power3.out',
          },
          DURATION
        )
        // .to(
        //   "#bar2",
        //   {
        //     opacity: 1,
        //     duration: DURATION,
        //     ease: "power3.out",
        //   },
        //   DURATION
        // )
        .pause()
    }

    t1.play()
  }, [isVisible])

  const handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const handleMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="px-4 py-6"
    >
      <div className="relative h-3 w-6">
        <div
          id="bar1"
          className={cn('absolute left-0 w-full animate-button', [
            hover,
            'bg-slate-500',
            'bg-slate-900',
          ])}
          style={{ height: BAR_WIDTH }}
        />
        {/* <div
          id="bar2"
          className="absolute left-0 top-1/2 w-full bg-black"
          style={{ height: BAR_WIDTH }}
        /> */}
        <div
          id="bar3"
          className={cn('absolute left-0 bottom-0 w-full animate-button', [
            hover,
            'bg-slate-500',
            'bg-slate-900',
          ])}
          style={{ height: BAR_WIDTH, top: '100%' }}
        />
      </div>
    </button>
  )
}

export default MenuButton
