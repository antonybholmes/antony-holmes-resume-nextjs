import ISlug from '../types/slug'

export const getCanonicalPostSlug = (path: string): string => {
  return path
    .replace(/\.md$/, '')
    .replaceAll('\\', '/')
    .replace(/^.+(published|drafts)\//, '')
}

export const getPostSlug = (path: string): ISlug => {
  return getCanonicalPostSlug(path).split('/')
}

export const getAuthorSlug = (path: string): string => {
  return path
    .replace(/\.md$/, '')
    .replaceAll('\\', '/')
    .replace(/^.+authors\//, '')
}

export const getSlugAsPath = (slug: ISlug): string => {
  return slug.join('/')
}
