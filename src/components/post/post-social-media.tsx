import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPostUrl } from '../../lib/articles'
import IPost from '../../types/post'
import BaseLink from '../link/base-link'
import VCenterRow from '../v-center-row'

export const CLS_TEXT_GRAY_HOVER =
  'text-slate-300 hover:text-slate-400 animate-button mr-4'

interface IProps {
  post: IPost
}

const PostSocialMedia = ({ post }: IProps) => {
  const url = getPostUrl(post.slug)
  return (
    <VCenterRow>
      <BaseLink
        href={`https://twitter.com/intent/tweet?text=${post.fields.title}&url=${url}`}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          className={CLS_TEXT_GRAY_HOVER}
        />
      </BaseLink>

      <BaseLink href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className={CLS_TEXT_GRAY_HOVER}
        />
      </BaseLink>

      <BaseLink href={`https://www.linkedin.com/shareArticle?url=${url}`}>
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          className={CLS_TEXT_GRAY_HOVER}
        />
      </BaseLink>
    </VCenterRow>
  )
}

export default PostSocialMedia
