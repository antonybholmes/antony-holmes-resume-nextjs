import HeaderLinks from './header-links'
import VCenterRow from '../../v-center-row'
import cn from '../../../lib/class-names'
import MenuCloseButton from './menu-button-close'
import { animated, useSpring } from 'react-spring'
import { defaultMaxListeners } from 'events'

interface IProps {
  title: string
  page?: string
  expanded: boolean
  onClick: any
}

const MenuOverlay = ({ title, page, expanded, onClick }: IProps) => {
  const menuAnimation = useSpring({
    transform: expanded ? `translateY(0)` : `translateY(-100%)`,
    opacity: expanded ? 1 : 0,
  })

  return (
    <animated.div
      className={cn('fixed left-0 top-0 w-full h-screen z-50 bg-white')}
      style={menuAnimation}
    >
      <VCenterRow className="justify-end p-2">
        <MenuCloseButton isVisible={expanded} onClick={onClick} />
      </VCenterRow>
      <div className="mx-4 border-b border-slate-200">
        <HeaderLinks
          title={title}
          page={page}
          rowMode={false}
          onClick={onClick}
        />
      </div>
    </animated.div>
  )
}

export default MenuOverlay
