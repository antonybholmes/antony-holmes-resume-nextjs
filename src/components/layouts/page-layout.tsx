import { ReactNode } from 'react'
import Container from '../container'
import FlHdDiv from '../flhddiv'
import Layout from './layout'

interface IProps {
  title?: string
  description?: string
  page?: string
  path?: string
  isIndexed?: boolean
  children?: ReactNode
}

const PageLayout = ({
  title = '',
  description = '',
  page = '',
  path = '',
  isIndexed,
  children,
}: IProps) => {
  return (
    <Layout
      title={title}
      description={description}
      page={page}
      path={path}
      isIndexed={isIndexed}
    >
      <FlHdDiv>
        <Container>{children}</Container>
      </FlHdDiv>
    </Layout>
  )
}

export default PageLayout
