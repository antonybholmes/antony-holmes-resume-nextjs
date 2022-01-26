import PostBody from '../../../components/post/post-body'
import PostHeader from '../../../components/post/post-header'
import { getAllDrafts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import IPost from '../../../types/post'
import ArticleLayout from '../../../components/layouts/article-layout'
import BaseRow from '../../../components/base-row'
import PostDetails from '../../../components/post/post-details'
import { getAuthorMap } from '../../../lib/api/author'
import IBasePost from '../../../types/base-post'
import { allPostsBySlugMap } from '../../../lib/api/post'

interface IProps {
  post: IPost
}

const Page = ({ post }: IProps) => (
  <ArticleLayout title={post.fields.title} page="Articles" isIndexed={false}>
    <BaseRow>
      <article className="w-full 2xl:w-2/3">
        <PostHeader post={post} />
        <PostBody content={post.html} />
      </article>
      <div className="hidden 2xl:block w-1/3 pl-8">
        <div className="sticky top-0" style={{ top: '40px' }}>
          <PostDetails post={post} />
        </div>
      </div>
    </BaseRow>
  </ArticleLayout>
)

export default Page

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  const posts = getAllDrafts([
    'title',
    'description',
    'date',
    'slug',
    'author',
    'section',
    'tags',
    'content',
    'ogImage',
    'coverImage',
  ])

  const postsBySlugMap = allPostsBySlugMap(posts)

  let p: IBasePost = postsBySlugMap[params.slug]

  const author = authorMap[p.fields.author]

  const post = {
    ...p,
    html: await markdownHtml(p.fields.content || ''),
    authors: [author],
  }

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllDrafts(['slug', 'title'])

  const paths = posts.map(post => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
