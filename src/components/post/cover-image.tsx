import cn from '../../lib/class-names'
import IPost from '../../types/post'
import BaseLink from '../link/base-link'
import BaseCoverImage from './base-cover-image'

interface IProps {
  post: IPost
  hover?: boolean
  className?: string
}

const CoverImage = ({ post, hover = false, className }: IProps) => {
  const image = (
    <BaseCoverImage
      post={post}
      className={cn(
        'transition duration-500 overflow-hidden',
        [hover, 'brightness-80', 'hover:brightness-80'],
        className
      )}
    />
  )

  if (post.url) {
    return (
      <BaseLink href={post.url} aria-label={post.fields.title}>
        {image}
      </BaseLink>
    )
  } else {
    return image
  }
}

export default CoverImage
