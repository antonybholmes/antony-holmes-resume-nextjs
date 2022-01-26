import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'
import cn from '../lib/class-names'
import { CLS_TEXT_GRAY_HOVER } from '../lib/constants'
import BaseLink from './link/base-link'

interface ButtonProps {
  href: string
  icon: IconProp
}

const NextButton = ({ href, icon }: ButtonProps) => (
  <BaseLink href={href} className={CLS_TEXT_GRAY_HOVER}>
    <FontAwesomeIcon icon={icon} />
  </BaseLink>
)

interface IProps {
  page: number
  pages: number
}

const Pagination = ({ page, pages }: IProps) => {
  const pageStart = Math.max(1, page - 2)
  const pageEnd = pageStart + 5

  const prevPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return (
    <ul className="flex flex-row justify-center">
      <li className="w-8 text-center">
        <NextButton
          href={`/articles/page/${prevPage}`}
          icon={faAngleDoubleLeft}
        />
      </li>
      {_.range(pageStart, pageEnd, 1).map((p: number) => (
        <li
          className={cn('w-8 text-center', [p !== page, CLS_TEXT_GRAY_HOVER])}
          key={p}
        >
          {p <= pages ? (
            <BaseLink href={`/articles/page/${p}`}>{p}</BaseLink>
          ) : (
            <>{p}</>
          )}
        </li>
      ))}

      <li className="w-8 text-center">
        <NextButton
          href={`/articles/page/${nextPage}`}
          icon={faAngleDoubleRight}
        />
      </li>
    </ul>
  )
}

export default Pagination
