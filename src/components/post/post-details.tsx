import IPost from '../../types/post'
import Avatar from '../avatar'
import DateFormatter from '../date-formatter'
import PostSocialMedia from './post-social-media'
import PostTags from './post-tags'

interface IProps {
  post: IPost
  className?: string
}

// const PostDetails = ({ post }: IProps) => (
//   <>
//     <Avatar author={post.authors[0]} showTitle={true} />
//     <div className="mt-8 pt-8 border-t border-solid border-slate-200 grid grid-cols-3 gap-4 text-slate-500 tracking-wide text-sm">
//       <div className="uppercase tracking-wide text-sm">Published</div>
//       <div className="col-span-2">
//         <DateFormatter dateString={post.date} />
//       </div>
//       <div className="uppercase tracking-wide text-sm">Tags</div>
//       <div className="col-span-2">
//         <PostTags post={post} />
//       </div>
//     </div>
//     <div className="mt-4 pt-8 border-t border-solid border-slate-200 grid grid-cols-3 gap-4 text-slate-500">
//       <div className="uppercase tracking-wide text-sm">Share</div>
//       <div className="col-span-2">
//         <PostSocialMedia post={post} />
//       </div>
//     </div>
//   </>
// )

const PostDetails = ({ post, className }: IProps) => (
  <div className={className}>
    <Avatar author={post.authors[0]} showTitle={true} />
    <div className="mt-8 pt-4 border-t border-solid border-slate-200 text-slate-500 tracking-wide text-sm">
      <DateFormatter dateString={post.date} />
      <PostTags post={post} />
    </div>

    <div className="mt-4 pt-4 border-t border-solid border-slate-200 text-slate-500 tracking-wide text-sm">
      <PostSocialMedia post={post} />
    </div>
  </div>
)

export default PostDetails
