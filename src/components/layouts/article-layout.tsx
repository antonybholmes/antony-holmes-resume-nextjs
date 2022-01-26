import { ReactNode } from 'react'
import cn from '../../lib/class-names'
import ArticleContainer from '../article-container'
import Layout from './layout'

interface IProps {
  title: string
  description?: string
  page?: string
  path?: string
  isIndexed?: boolean
  header?: any
  className?: string
  children?: ReactNode
}

const ArticleLayout = ({
  title,
  description,
  page,
  path,
  isIndexed,
  className,
  children,
}: IProps) => {
  return (
    <Layout
      title={title}
      description={description}
      page={page}
      path={path}
      isIndexed={isIndexed}
      className={className}
    >
      <ArticleContainer className="py-12">{children}</ArticleContainer>
    </Layout>
  )
}

export default ArticleLayout
