import { getUrlFriendlyTag } from './tags'

export const getPortfolioTagUrl = (tag: string) => {
  return `/portfolios/tags/${tag.toLowerCase().replace(' ', '-')}`
}

export const getAuthorUrl = (name: string) => {
  return `/articles/authors/${name.toLowerCase().replace(' ', '-')}`
}

export const getSectionUrl = (section: string) => {
  console.log(section)
  return `/articles/sections/${getUrlFriendlyTag(section)}/page/1`
}

export const getTagUrl = (tag: string) => {
  return `/articles/tags/${getUrlFriendlyTag(tag)}/page/1`
}
