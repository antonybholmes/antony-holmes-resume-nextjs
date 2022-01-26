import AvatarImage from '../../../components/avatar-image'
import BaseMorePosts from '../../../components/post/base-more-posts'
import BaseRow from '../../../components/base-row'
import ArticleLayout from '../../../components/layouts/article-layout'
import PostBody from '../../../components/post/post-body'
import { getAllAuthors, getAuthorBySlug } from '../../../lib/api/author'
import { getAllPosts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import IAuthor from '../../../types/author'
import IPost from '../../../types/post'
import PageTitle from '../../../components/page-title'
import HCenterRow from '../../../components/h-center-row'

interface IProps {
  author: IAuthor
  posts: IPost[]
}

const Page = ({ author, posts }: IProps) => {
  //const heroPost = posts[0]
  //const morePosts = posts.slice(1)

  return (
    <ArticleLayout title={author.fields.name}>
      <BaseRow>
        <div className="w-full lg:w-85/100 lg:pr-16">
          <HCenterRow className="lg:hidden">
            <div className="w-1/3 md:w-1/4">
              <AvatarImage
                image={author.fields.picture}
                alt={author.fields.name}
              />
            </div>
          </HCenterRow>
          <PageTitle
            title={author.fields.name}
            subtitle={author.fields.title}
            className="text-center lg:text-left mt-8"
          />
          <PostBody content={author.html} className="text-2xl mt-12" />
        </div>
        <div className="hidden lg:block w-15/100">
          <AvatarImage image={author.fields.picture} alt={author.fields.name} />
        </div>
      </BaseRow>

      <section className="border-t border-solid border-slate-100 mt-16 pt-16">
        <h2 className="text-center text-3xl font-semibold mb-16">
          Latest Posts
        </h2>
        <BaseMorePosts posts={posts} />
      </section>
    </ArticleLayout>
  )
}

export default Page

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const authorFields = getAuthorBySlug(params.slug, [
    'id',
    'name',
    'title',
    'picture',
    'content',
    'slug',
  ])

  // Get author html
  const author = {
    ...authorFields,
    html: await markdownHtml(authorFields.fields.content || ''),
  }

  let posts = getAllPosts([
    'title',
    'description',
    'slug',
    'author',
    'section',
    'tags',
    'content',
    'ogImage',
    'coverImage',
  ])
    .filter(post => {
      return post.fields.author === author.fields.name
    })
    .slice(0, 9)

  const authorPosts = await Promise.all(
    posts.map(async post => {
      const html = await markdownHtml(post.fields.content || '')
      return {
        ...post,
        html,
        authors: [author],
      }
    })
  )

  return {
    props: {
      author: author,
      posts: authorPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const authors = getAllAuthors(['slug'])

  const paths = authors.map(author => {
    return {
      params: {
        slug: author.slug,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
