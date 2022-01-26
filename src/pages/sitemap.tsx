import ArticleLayout from '../components/layouts/article-layout'
import BlueLink from '../components/link/blue-link'
import PageTitle from '../components/page-title'
import WrapRow from '../components/wrap-row'
import HEADER_LINKS from '../lib/menus/header.json'
import REVIEW_LINKS from '../lib/menus/reviews.json'

const Page = () => {
  return (
    <ArticleLayout title="Site Map">
      <PageTitle title={'Site Map'} />

      <WrapRow>
        <div className="w-full md:w-1/5">
          <h3 className="mt-4 font-semibold">Learn More</h3>
          {HEADER_LINKS.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink aria-label={`Goto ${link.name}`} href={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </div>

        <div className="w-full md:w-1/5">
          <h3 className="mt-4 font-semibold">Resources</h3>
          {REVIEW_LINKS.map((link: any, i: number) => {
            return (
              <div className="mt-2" key={i}>
                <BlueLink aria-label={`Goto ${link.name}`} href={link.url}>
                  {link.name}
                </BlueLink>
              </div>
            )
          })}
        </div>

        <div className="w-full md:w-1/5">
          <h3 className="mt-4 font-semibold">About</h3>

          <div className="mt-2">
            <BlueLink href="/help">Help</BlueLink>
          </div>

          <div className="mt-2">
            <BlueLink href="/privacy">Privacy Policy</BlueLink>
          </div>
          <div className="mt-2">
            <BlueLink href="/terms">Terms of Use</BlueLink>
          </div>

          <div className="mt-2">
            <BlueLink href="/contact">Contact Us</BlueLink>
          </div>
        </div>
      </WrapRow>
    </ArticleLayout>
  )
}

export default Page
