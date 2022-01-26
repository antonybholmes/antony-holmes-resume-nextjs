import PostBody from '../../components/post/post-body'
import PostHeader from '../../components/post/post-header'
import { getAllPosts, allPostsBySlugMap } from '../../lib/api/post'
import markdownHtml from '../../lib/markdown-html'
import IPost from '../../types/post'
import ArticleLayout from '../../components/layouts/article-layout'
import BaseRow from '../../components/base-row'
import PostDetails from '../../components/post/post-details'
import { getAuthorMap } from '../../lib/api/author'
import ISlug from '../../types/slug'
import { getPostSlug, getSlugAsPath } from '../../lib/slug'
import IBasePost from '../../types/base-post'
import KeepReading from '../../components/post/keep-reading'
import RecentPosts from '../../components/post/recent-posts'
import { getTags } from '../../lib/tags'
import TwoThirdsColLayout from '../../components/two-thirds-col-layout'

interface IProps {
  post: IPost
  relatedPosts: IPost[]
  readMorePosts: IPost[]
  recentPosts: IPost[]
}

const Page = ({ post, relatedPosts, readMorePosts, recentPosts }: IProps) => (
  <ArticleLayout title={post.fields.title} page="Articles">
    <TwoThirdsColLayout>
      <>
        <PostHeader post={post} />
        <PostBody content={post.html} />
      </>

      <div className="sticky top-0" style={{ top: '40px' }}>
        <PostDetails post={post} />
      </div>
    </TwoThirdsColLayout>
    {readMorePosts.length > 0 && <KeepReading posts={readMorePosts} />}
    {relatedPosts.length > 0 && (
      <RecentPosts posts={relatedPosts} title="Related Posts" />
    )}
    {recentPosts.length > 0 && <RecentPosts posts={recentPosts} />}
  </ArticleLayout>
)

export default Page

type Params = {
  params: {
    slug: ISlug
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  const slug = getSlugAsPath(params.slug)

  const posts = getAllPosts([
    'title',
    'description',
    'slug',
    'author',
    'section',
    'tags',
    'related',
    'content',
    'ogImage',
    'coverImage',
  ])

  const postsBySlugMap = allPostsBySlugMap(posts)

  let p: IBasePost = postsBySlugMap[slug]

  const author = authorMap[p.fields.author]

  const post = {
    ...p,
    html: await markdownHtml(p.fields.content || ''),
    authors: [author],
  }

  const relatedTitles = getTags(post.fields.related)

  const relatedPosts = await Promise.all(
    posts
      .filter(p => relatedTitles.includes(p.fields.title))
      .map(async p => {
        const html = await markdownHtml(p.fields.content || '')
        return {
          ...p,
          html,
          authors: [author],
        }
      })
  )

  const index = post.index + 1 //Math.max(0, Math.min(post.index, posts.length - 3))

  const readMorePosts = await Promise.all(
    posts
      .filter(p => p.fields.section.includes(post.fields.section))
      .slice(index, index + 3)
      .map(async p => {
        const html = await markdownHtml(p.fields.content || '')
        return {
          ...p,
          html,
          authors: [author],
        }
      })
  )

  // let rmp

  // if (index === 0) {
  //   // first post so look 2 posts back
  //   rmp = [posts[1], posts[2]]
  // } else if (index == posts.length - 1) {
  //   // last post so look 2 posts ahead
  //   rmp = [posts[posts.length - 3], posts[posts.length - 2]]
  // } else {
  //   // pick the previous post and the next post
  //   rmp = [posts[index - 1], posts[index + 1]]
  // }

  const recentPosts = await Promise.all(
    posts.slice(index, index + 3).map(async p => {
      const html = await markdownHtml(p.fields.content || '')
      return {
        ...p,
        html,
        authors: [author],
      }
    })
  )

  return {
    props: {
      post: post,
      relatedPosts: relatedPosts,
      readMorePosts: readMorePosts,
      recentPosts: recentPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  const paths = posts.map(post => {
    return {
      params: {
        slug: getPostSlug(post.slug),
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
