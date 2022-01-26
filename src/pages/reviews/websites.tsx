import H2 from '../../components/h2'
import ArticleLayout from '../../components/layouts/article-layout'
import BlueLink from '../../components/link/blue-link'
import PageTitle from '../../components/page-title'
import websites from '../../../_content/reviews/websites.json'
import TwoThirdsColLayout from '../../components/two-thirds-col-layout'

const renderWebsites = () => (
  <div className="mt-16">
    {websites.map(
      (
        div: {
          name: string
          links: { name: string; description: string; url: string }[]
        },
        index: number
      ) => {
        return (
          <div key={index} className="mb-16">
            <H2 className="mb-4">{div.name}</H2>

            <ul>
              {div.links.map(
                (
                  link: { name: string; description: string; url: string },
                  linkIndex: number
                ) => {
                  return (
                    <li
                      key={linkIndex}
                      className="shadow-card overflow-hidden rounded-md p-6 mb-8"
                    >
                      <BlueLink href={link.url} className="font-semibold">
                        {link.name}
                      </BlueLink>
                      <p>{link.description}</p>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        )
      }
    )}
  </div>
)

const Page = () => {
  return (
    <ArticleLayout
      title="Web Sites"
      description="Interesting financial web sites."
    >
      <PageTitle
        title="Websites"
        subtitle="My favorite financial websites from the good guys"
      />
      <TwoThirdsColLayout>
        <>{renderWebsites()}</>
        <></>
      </TwoThirdsColLayout>
    </ArticleLayout>
  )
}

export default Page
