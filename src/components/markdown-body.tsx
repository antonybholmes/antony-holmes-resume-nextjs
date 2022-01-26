import cn from '../lib/class-names'

interface IProps {
  content: string
  className?: string
}

const MarkdownBody = ({ content, className }: IProps) => (
  <div
    className={cn('markdown', className)}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default MarkdownBody
