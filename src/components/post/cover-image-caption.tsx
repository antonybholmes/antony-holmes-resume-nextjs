import cn from '../../lib/class-names'
import IPost from '../../types/post'

interface IProps {
  post: IPost
  className?: string
}

const CoverImageCaption = ({ post, className }: IProps) => {
  const caption = post.fields.coverImage.split(';')[1].trim()

  return (
    <p className={cn('text-sm text-center mt-2 text-stone-500', className)}>
      {caption}
    </p>
  )
}

export default CoverImageCaption
