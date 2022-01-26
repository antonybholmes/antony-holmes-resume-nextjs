import { getAllPosts } from '../../../lib/api/post'
import { POSTS_PER_PAGE } from '../../../lib/constants'
import markdownHtml from '../../../lib/markdown-html'
import IPost from '../../../types/post'
import ArticleLayout from '../../../components/layouts/article-layout'
import MorePosts from '../../../components/post/more-posts'
import HeroPost from '../../../components/post/hero-post'
import _ from 'lodash'
import Pagination from '../../../components/pagination'
import { getAuthorMap } from '../../../lib/api/author'
import ApplePagination from '../../../components/apple-pagination'

interface IPageProps {
  page: number
  posts: IPost[]
  pages: number
}

const Page = ({ page, posts, pages }: IPageProps) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <ArticleLayout title="All Posts" page="Articles">
      <HeroPost post={heroPost} />
      <MorePosts posts={morePosts} />

      <ApplePagination page={page} pages={pages} />
    </ArticleLayout>
  )
}

export default Page

interface IProps {
  params: {
    slug: string
    page: number
    start: number
    end: number
    pages: number
  }
}

export const getStaticProps = async ({ params }: IProps) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  let posts = getAllPosts([
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

  const page = parseInt(params.slug) - 1
  const pages = Math.floor(posts.length / POSTS_PER_PAGE) + 1
  const start = page * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE

  posts = posts.slice(start, end)

  const pagePosts = await Promise.all(
    posts.map(async post => {
      const html = await markdownHtml(post.fields.content || '')
      return {
        ...post,
        html,
        authors: [authorMap[post.fields.author]],
      }
    })
  )

  return {
    props: {
      page: page + 1,
      posts: pagePosts,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'title'])

  const pages = Math.floor(posts.length / POSTS_PER_PAGE) + 1

  const paths = _.range(0, pages).map(page => {
    return {
      params: {
        slug: (page + 1).toString(),
      },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
