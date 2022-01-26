interface IBasePost {
  slug: string
  url: string
  index: number
  date: string
  fields: {
    title: string
    description: string
    coverImage: string
    author: string
    excerpt: string
    section: string
    tags: string
    related: string
    ogImage: string
    content: string
  }
}

export default IBasePost
