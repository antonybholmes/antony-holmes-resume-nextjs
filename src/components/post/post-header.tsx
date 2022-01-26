import IPost from '../../types/post'
import PageTitle from '../page-title'
import BaseCoverImage from './base-cover-image'
import PostSectionLink from './post-section-link'
import PostDetails from './post-details'
import CoverImageCaption from './cover-image-caption'

interface IProps {
  post: IPost
}

const PostHeader = ({ post }: IProps) => {
  return (
    <>
      {post.fields.section && <PostSectionLink post={post} />}
      <PageTitle
        title={post.fields.title}
        subtitle={post.fields.description}
        className="mt-4"
      />

      <PostDetails post={post} className="block xl:hidden mb-16" />

      <div className="mb-8 md:mb-16 sm:mx-0">
        <BaseCoverImage post={post} className="rounded-xl" />
        {post.fields.coverImage.includes(';') && (
          <CoverImageCaption post={post} />
        )}
      </div>
    </>
  )
}

export default PostHeader
