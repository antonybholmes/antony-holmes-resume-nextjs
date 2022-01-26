import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import IPost from '../../types/post'
import PostSectionLink from './post-section-link'
import CoverImage from './cover-image'
import { useState } from 'react'
import BaseLink from '../link/base-link'

interface IProps {
  post: IPost
}

const HeroPost = ({ post }: IProps) => {
  const [hover, setHover] = useState(false)

  const _handleMouseEnter = () => {
    setHover(true)
  }

  const _handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 rounded-2xl overflow-hidden"
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
    >
      <div>
        <CoverImage post={post} hover={hover} />
      </div>
      <div>
        <PostSectionLink post={post} />
        <h2 className="mb-4 font-bold text-4xl lg:text-5xl mt-2">
          <BaseLink href={post.url}>{post.fields.title}</BaseLink>
        </h2>
        <div className="mb-4 text-lg">
          <DateFormatter dateString={post.date} />
        </div>

        {/* <p className="text-lg leading-relaxed mb-4">{post.fields.excerpt}</p> */}
        <Avatar author={post.authors[0]} isSmall={true} />
      </div>
    </article>
  )
}

export default HeroPost
