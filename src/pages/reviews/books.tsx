import H2 from '../../components/h2'
import ArticleLayout from '../../components/layouts/article-layout'
import BlueLink from '../../components/link/blue-link'
import PageTitle from '../../components/page-title'
import books from '../../../_content/reviews/books.json'

const renderBooks = () => (
  <div className="mt-16">
    {books.map(
      (
        section: {
          name: string
          books: {
            name: string
            author: string
            description: string
            url: string
          }[]
        },
        index: number
      ) => {
        return (
          <section key={index} className="mb-16">
            <H2>{section.name}</H2>

            <ul>
              {section.books.map(
                (
                  link: {
                    name: string
                    author: string
                    description: string
                    url: string
                  },
                  linkIndex: number
                ) => {
                  return (
                    <li key={linkIndex} className="mb-4">
                      <h3>
                        <BlueLink href={link.url}>{link.name}</BlueLink>
                      </h3>
                      <p>{link.author}</p>
                      <p>{link.description}</p>
                    </li>
                  )
                }
              )}
            </ul>
          </section>
        )
      }
    )}
  </div>
)

const Page = () => (
  <ArticleLayout title="Books" description="Interesting financial books.">
    <PageTitle
      title="Books"
      subtitle="These are some of my favorite financial books."
    />

    {renderBooks()}
  </ArticleLayout>
)

export default Page
