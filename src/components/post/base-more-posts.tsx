import PostPreview from './post-preview'
import IPost from '../../types/post'

interface IProps {
  posts: IPost[]
}

const BaseMorePosts = ({ posts }: IProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mb-32">
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default BaseMorePosts
