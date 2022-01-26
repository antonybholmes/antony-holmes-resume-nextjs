import { getAllPosts } from '../../../lib/api/post'
import markdownHtml from '../../../lib/markdown-html'
import IPost from '../../../types/post'
import ArticleLayout from '../../../components/layouts/article-layout'
import MorePosts from '../../../components/post/more-posts'
import HeroPost from '../../../components/post/hero-post'
import _ from 'lodash'
import { getAuthorMap } from '../../../lib/api/author'
import { getFormattedTag, getTags, getUrlFriendlyTag } from '../../../lib/tags'
import { POSTS_PER_PAGE } from '../../../lib/constants'
import ApplePagination from '../../../components/apple-pagination'

interface IPageProps {
  tag: string
  page: number
  posts: IPost[]
  pages: number
}

const Page = ({ tag, page, posts, pages }: IPageProps) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <ArticleLayout title={tag} page="Articles">
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

  const tag = getFormattedTag(params.slug[0])

  let posts = getAllPosts([
    'title',
    'description',
    'date',
    'slug',
    'url',
    'author',
    'tags',
    'content',
    'ogImage',
    'coverImage',
  ]).filter(post => getTags(post.fields.tags).includes(tag))

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
      tag: tag,
      page: page + 1,
      posts: pagePosts,
      pages: pages,
    },
  }
}

export const getStaticPaths = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'tags'])

  const tags = new Set<string>()

  allPosts.forEach(post => {
    getTags(post.fields.tags).forEach(tag => {
      tags.add(tag)
    })
  })

  const paths: { params: { slug: string[] } }[] = []

  Array.from(tags).forEach(tag => {
    const posts = allPosts.map(post => post.fields.tags.includes(tag))
    const pages = Math.floor(posts.length / POSTS_PER_PAGE) + 1

    _.range(0, pages).forEach(page => {
      paths.push({
        params: {
          slug: [getUrlFriendlyTag(tag), 'page', (page + 1).toString()],
        },
      })
    })
  })

  // const paths = Array.from(tags).map(tag => {
  //   return {
  //     params: {
  //       slug: tag,
  //     },
  //   }
  // })

  return {
    paths: paths,
    fallback: false,
  }
}
