import cn from '../../lib/class-names'
import GENERIC_COVER_IMAGES from '../../lib/generic-images.json'
import IPost from '../../types/post'

interface IProps {
  post: IPost
  className?: string
}

const BaseCoverImage = ({ post, className }: IProps) => {
  let src: string

  if (post.fields.coverImage && post.fields.coverImage != '') {
    src = post.fields.coverImage.split(';')[0].trim()
  } else {
    // cycle through generic images
    src = GENERIC_COVER_IMAGES[post.index % GENERIC_COVER_IMAGES.length]
  }

  return (
    <img
      className={cn('w-full object-cover', className)}
      src={src}
      alt={`Cover Image for ${post.fields.title}`}
    />
  )
}

export default BaseCoverImage
