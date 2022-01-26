import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundButtonLink from './link/round-button-link'
import VCenterRow from './v-center-row'

interface ButtonProps {
  href: string
  icon: IconProp
}

const NextButton = ({ href, icon }: ButtonProps) => (
  <RoundButtonLink
    href={href}
    className="text-white bg-slate-300 hover:bg-blue-500 w-8 h-8"
  >
    <FontAwesomeIcon icon={icon} />
  </RoundButtonLink>
)

interface IProps {
  page: number
  pages: number
}

const ApplePagination = ({ page, pages }: IProps) => {
  const prevPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return (
    <VCenterRow center={true}>
      <ul className="flex flex-row items-center justify-between w-56">
        <li className="w-8 text-center">
          <NextButton
            href={`/articles/page/${prevPage}`}
            icon={faChevronLeft}
          />
        </li>
        <li className="text-center">
          {page} of {pages}
        </li>

        <li className="w-8 text-center">
          <NextButton
            href={`/articles/page/${nextPage}`}
            icon={faChevronRight}
          />
        </li>
      </ul>
    </VCenterRow>
  )
}

export default ApplePagination
