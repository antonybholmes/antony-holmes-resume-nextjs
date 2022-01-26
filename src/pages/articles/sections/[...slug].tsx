import { getAllPosts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import IPost from '../../../types/post'
import ArticleLayout from '../../../components/layouts/article-layout'
import MorePosts from '../../../components/post/more-posts'
import HeroPost from '../../../components/post/hero-post'
import _ from 'lodash'
import { getAuthorMap } from '../../../lib/api/author'
import { getFormattedTag, getUrlFriendlyTag } from '../../../lib/tags'
import { POSTS_PER_PAGE } from '../../../lib/constants'
import Pagination from '../../../components/pagination'
import ApplePagination from '../../../components/apple-pagination'

interface IPageProps {
  section: string
  page: number
  posts: IPost[]
  pages: number
}

const Page = ({ section, page, posts, pages }: IPageProps) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <ArticleLayout title={section} page="Articles">
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
  }
}

export const getStaticProps = async ({ params }: IProps) => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  const section = getFormattedTag(params.slug[0])

  let posts = getAllPosts([
    'title',
    'description',
    'date',
    'slug',
    'url',
    'author',
    'section',
    'tags',
    'content',
    'ogImage',
    'coverImage',
  ]).filter(post => post.fields.section.includes(section))

  // last element of slug array is page number
  const page = parseInt(params.slug[params.slug.length - 1]) - 1
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
      section: section,
      page: page + 1,
      posts: pagePosts,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const allPosts = getAllPosts(['slug', 'section', 'title'])

  const section = new Set<string>()

  allPosts.forEach(post => {
    section.add(post.fields.section)
  })

  const paths: { params: { slug: string[] } }[] = []

  Array.from(section).forEach(section => {
    const posts = allPosts.map(post => post.fields.section.includes(section))
    const pages = Math.floor(posts.length / POSTS_PER_PAGE) + 1

    _.range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [getUrlFriendlyTag(section), 'page', (page + 1).toString()],
        },
      })
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}
