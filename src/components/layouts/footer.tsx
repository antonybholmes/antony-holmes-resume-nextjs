import cn from '../../lib/class-names'
import { SITE_NAME } from '../../lib/constants'
import FOOTER_LINKS from '../../lib/menus/footer.json'
import INFO_LINKS from '../../lib/menus/info.json'
import REVIEW_LINKS from '../../lib/menus/reviews.json'
import ArticleContainer from '../article-container'
import BaseRow from '../base-row'
import ToBlueLink from '../link/to-blue-link'
import UnderlineLink from '../link/underline-link'

const Footer = () => {
  return (
    <footer className="text-sm pt-32 text-slate-600">
      <ArticleContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {FOOTER_LINKS.map(
            (
              linkGroup: {
                title: string
                links: { name: string; url: string }[]
              },
              linkGroupIndex: number
            ) => {
              return (
                <div key={linkGroupIndex}>
                  <h5 className="font-semibold mb-4">{linkGroup.title}</h5>
                  <ul>
                    {linkGroup.links.map(
                      (
                        link: { name: string; url: string },
                        linkIndex: number
                      ) => {
                        return (
                          <li key={linkIndex} className="mb-2">
                            <ToBlueLink href={link.url}>{link.name}</ToBlueLink>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              )
            }
          )}

          <div>
            <h5 className="font-semibold mb-4">
              <ToBlueLink href="/reviews">Reviews</ToBlueLink>
            </h5>
            <ul>
              {REVIEW_LINKS.map(
                (link: { name: string; url: string }, linkIndex: number) => {
                  return (
                    <li key={linkIndex} className="mb-2">
                      <ToBlueLink href={link.url}>{link.name}</ToBlueLink>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>

        <BaseRow className="border-t border-solid border-slate-200 mt-16 pt-4 pb-12 text-xs">
          <ul className="flex flex-row">
            <li className={cn('inline-block')}>
              &copy; {new Date().getFullYear()} {SITE_NAME}
            </li>
            {INFO_LINKS.map(
              (link: { name: string; url: string }, index: number) => (
                <li key={index} className={cn('inline-block ml-8')}>
                  <UnderlineLink href={link.url}>{link.name}</UnderlineLink>
                </li>
              )
            )}
          </ul>
        </BaseRow>
      </ArticleContainer>
    </footer>
  )
}

export default Footer
