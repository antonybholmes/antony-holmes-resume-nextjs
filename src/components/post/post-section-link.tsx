import cn from '../../lib/class-names'
import { getSectionUrl } from '../../lib/urls'
import IPost from '../../types/post'
import ToBlueLink from '../link/to-blue-link'

interface IProps {
  post: IPost
  className?: string
}

const PostSectionLink = ({ post, className }: IProps) => (
  <ToBlueLink
    href={getSectionUrl(post.fields.section)}
    className={cn(
      'text-xs tracking-wide uppercase text-slate-500 font-bold',
      className
    )}
  >
    {post.fields.section}
  </ToBlueLink>
)

export default PostSectionLink
