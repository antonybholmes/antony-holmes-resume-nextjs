import IBasePost from './base-post'
import IPostAuthor from './post-author'

interface IPost extends IBasePost {
  html: string
  authors: IPostAuthor[]
}

export default IPost
