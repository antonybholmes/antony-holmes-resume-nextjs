import MorePosts from '../components/post/more-posts'
import HeroPost from '../components/post/hero-post'
import { getAllPosts } from '../lib/api/post'
import IPost from '../types/post'
import { getAuthorMap } from '../lib/api/author'
import Layout from '../components/layouts/layout'
import { EMAIL, PHONE } from '../lib/constants'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children?: ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <div className="mb-4">
    <div className="bg-blue-500 text-white uppercase text-xl tracking-wide px-3 py-1">
      {title}
    </div>
    <div>{children}</div>
  </div>
)

interface IProps {
  posts: IPost[]
}

const Page = ({ posts }: IProps) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <Layout title="Home">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="bg-gradient-to-b from-blue-700 to-blue-400"></div>
        <div className="col-span-11 p-8">
          <h1 className="font-bold text-5xl mt-8 text-blue-500">
            Antony Holmes
          </h1>
          <h2 className="font-medium text-2xl mt-4 uppercase tracking-wider">
            Full Stack Engineer
          </h2>

          <div className="grid grid-cols-2 gap-x-4 mt-4">
            <div>
              <div className="grid grid-cols-4 gap-x-4 text-sm">
                <div className="font-semibold">Email:</div>
                <div className="col-span-3">{EMAIL}</div>
                <div className="font-semibold">Phone:</div>
                <div className="col-span-3">{PHONE}</div>
                <div className="font-semibold">Location:</div>
                <div className="col-span-3">New York</div>
              </div>
            </div>
            <div>
              <Section title="Work History" />
              <Section title="Skills" />
              <Section title="Education" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page

export const getStaticProps = async () => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  // Get all the posts and add the authors in
  let posts = getAllPosts([
    'title',
    'description',
    'date',
    'slug',
    'author',
    'section',
    'tags',
    'coverImage',
    'excerpt',
  ])

  //await generateSiteMap(posts)
  //await generateRSS(posts)

  posts = posts.slice(0, 4).map(post => {
    return {
      ...post,
      authors: [authorMap[post.fields.author]],
    }
  })

  return {
    props: { posts },
  }
}
