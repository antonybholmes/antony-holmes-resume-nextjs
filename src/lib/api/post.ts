import fs from 'fs'
import path, { join } from 'path'
import IFieldMap from '../../types/field-map'
import { getCanonicalPostSlug } from '../slug'
import { getFields } from './markdown'

export const POSTS_DIR = join(
  process.cwd(),
  '_content',
  'articles',
  'posts',
  'published'
)
export const DRAFTS_DIR = join(
  process.cwd(),
  '_content',
  'articles',
  'posts',
  'drafts'
)

export const getAllFiles = (dirPath = '', arrayOfFiles: string[] = []) => {
  const files = fs.readdirSync(dirPath)

  files.forEach(file => {
    const p = path.join(dirPath, '/', file) //`${dirPath}/${file}`
    if (fs.statSync(p).isDirectory()) {
      getAllFiles(p, arrayOfFiles)
    } else {
      arrayOfFiles.push(p) //path.join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

export const getPostPaths = () => {
  return getAllFiles(POSTS_DIR)
}

export const getPostBySlug = (
  slug: string,
  fields: string[] = [],
  isPublished: boolean
) => {
  const canonicalSlug = getCanonicalPostSlug(slug)

  const fullPath = join(
    isPublished ? POSTS_DIR : DRAFTS_DIR,
    `${canonicalSlug}.md`
  )

  const match = canonicalSlug.match(/(\d{4})\/(\d{2})\/(\d{2})/)

  const date = match ? match.slice(1, 4).join('-') : '2022-01-01'

  return {
    slug: canonicalSlug,
    url: isPublished
      ? `/articles/${canonicalSlug}`
      : `/articles/drafts/${canonicalSlug}`,
    date: date,
    fields: getFields(fullPath, fields),
  }
}

export const getAllPosts = (fields: string[] = []) => {
  const paths = getPostPaths()
  const posts = paths
    .map(path => getPostBySlug(path, fields, true))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (post1.date > post2.date) {
        return -1
      } else if (post1.date < post2.date) {
        return 1
      } else {
        // dates equal so compare names
        return post1.fields.title.localeCompare(post2.fields.title)
      }
    })
    .map((post, index) => {
      return {
        ...post,
        index,
      }
    })

  return posts
}

export const allPostsBySlugMap = (
  posts: { slug: string; fields: IFieldMap }[]
) => {
  let ret: any = {}

  posts.forEach(post => {
    ret[post.slug] = post
  })

  return ret
}

export const getDraftPaths = () => {
  return getAllFiles(DRAFTS_DIR)
}

export const getAllDrafts = (fields: string[] = []) => {
  const paths = getDraftPaths()
  const posts = paths
    .map(path => getPostBySlug(path, fields, false))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      if (post1.date > post2.date) {
        return -1
      } else if (post1.date < post2.date) {
        return 1
      } else {
        // dates equal so compare names
        return post1.fields.title.localeCompare(post2.fields.title)
      }
    })
    .map((post, index) => {
      return {
        ...post,
        index,
      }
    })

  return posts
}
