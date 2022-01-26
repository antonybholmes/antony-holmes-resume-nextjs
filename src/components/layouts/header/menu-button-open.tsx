import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from '../../../lib/class-names'

export const CLS = cn(`px-4 
  py-3 
  hover:text-blue-400 
  focus:outline-none 
  focus:border-blue-200 
  animate-button border-3 
  border-solid border-transparent`)

export interface IProps {
  isVisible: boolean
  onClick: any
}

const MenuOpenButton = ({ onClick }: IProps) => {
  const [hover, setHover] = useState(false)

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
      className={CLS}
    >
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  )
}

export default MenuOpenButton
