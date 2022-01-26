import Footer from './footer'
import Header from './header/header'
import SEO from './seo'
import { ReactNode } from 'react'
import cn from '../../lib/class-names'

interface IProps {
  title: string
  description?: string
  page?: string
  path?: string
  bg?: string
  isIndexed?: boolean
  headerClassName?: string
  className?: string
  children?: ReactNode
}

const Layout = ({
  title,
  description,
  page,
  path,
  isIndexed,
  headerClassName,
  className,
  children,
}: IProps) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        url={path}
        isIndexed={isIndexed}
      />
      {/* <Header title={title} page={page} className={headerClassName} /> */}
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
