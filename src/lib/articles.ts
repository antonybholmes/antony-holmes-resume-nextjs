import { SITE_URL } from './constants'

export const getPostRelativeUrl = (slug: string): string => {
  return `/articles/${slug}`
}

export const getPostUrl = (slug: string): string => {
  return `${SITE_URL}${getPostRelativeUrl(slug)}`
}
