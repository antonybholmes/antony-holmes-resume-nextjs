import { getTagUrl } from '../../lib/urls'
import PillButtonLink from '../link/pill-button-link'

interface IProps {
  tag: string
}

const PostTagLink = ({ tag }: IProps) => (
  <PillButtonLink
    href={getTagUrl(tag)}
    className="bg-slate-200 hover:bg-slate-300  px-3 py-1 mr-2 mb-2"
  >
    {tag}
  </PillButtonLink>
)

export default PostTagLink
