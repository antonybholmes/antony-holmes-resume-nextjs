import cn from '../../../lib/class-names'
import { CLS_TEXT_GRAY_HOVER } from '../../../lib/constants'
import HEADER_LINKS from '../../../lib/menus/header.json'
import ILink from '../../../types/link'
import BaseLink from '../../link/base-link'
import HeaderLink from './header-link'

interface IProps {
  title: string
  page?: string
  rowMode?: boolean
  onClick?: any
}

const HeaderLinks = ({ title, page = '', rowMode = true, onClick }: IProps) => {
  return rowMode ? (
    <ul className="flex flex-row items-center">
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = link.name === title || link.name === page

        return (
          <li className="inline ml-10" key={index}>
            <HeaderLink link={link} selected={selected} onClick={onClick} />
          </li>
        )
      })}
    </ul>
  ) : (
    <ul>
      {HEADER_LINKS.map((link: ILink, index: number) => {
        const selected = title == link.name || page == link.name

        return (
          <li key={index}>
            <BaseLink
              href={link.url}
              className={cn(`block px-6 py-4 `, [
                selected,
                'bg-slate-100',
                cn(CLS_TEXT_GRAY_HOVER, 'hover:bg-slate-50 animate-button'),
              ])}
              onClick={onClick}
            >
              {link.name}
            </BaseLink>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderLinks
