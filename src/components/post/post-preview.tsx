import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import CoverImage from './cover-image'
import IPost from '../../types/post'
import WrapRow from '../wrap-row'
import BaseLink from '../link/base-link'
import { getTagUrl } from '../../lib/urls'
import cn from '../../lib/class-names'
import PostSectionLink from './post-section-link'
import { useState } from 'react'

const CLASSES = cn(`rounded-full 
  animate-button
  bg-slate-600
  hover:bg-indigo-500
  text-white 
  tracking-wide 
  px-3 
  py-1 
  mr-2 
  mb-2`)

interface TagProps {
  tags: string
}

const PostPreviewTags = ({ tags }: TagProps) => (
  <WrapRow className="text-xs">
    {tags
      .split(',')
      .map(tag => tag.trim().toUpperCase())
      .slice(0, 1)
      .map((tag: string, index: number) => {
        return (
          <BaseLink className={CLASSES} key={index} href={getTagUrl(tag)}>
            {tag}
          </BaseLink>
        )
      })}
  </WrapRow>
)

interface IProps {
  post: IPost
}

const PostPreview = ({ post }: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = () => {
    setHover(true)
  }

  const _handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <article onMouseEnter={_handleMouseEnter} onMouseLeave={_handleMouseLeave}>
      <CoverImage post={post} className="rounded-t-2xl" hover={hover} />

      <PostSectionLink post={post} className="mt-4" />
      <h3 className="text-3xl font-bold mt-2">
        <BaseLink href={post.url}>{post.fields.title}</BaseLink>
      </h3>
      <div className="text-sm mt-2">
        <DateFormatter dateString={post.date} />
      </div>
      {/* <p className="text-lg leading-relaxed mb-4">{post.fields.excerpt}</p> */}
      <Avatar author={post.authors[0]} isSmall={true} className="mt-2" />
    </article>
  )
}

export default PostPreview
