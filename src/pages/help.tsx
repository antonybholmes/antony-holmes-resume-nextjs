import DropShadowDiv from '../components/drop-shadow-div'
import ArticleLayout from '../components/layouts/article-layout'
import BlueLink from '../components/link/blue-link'
import PageTitle from '../components/page-title'
import { SITE_NAME, SITE_VERSION } from '../lib/constants'
import TwoThirdsColLayout from '../components/two-thirds-col-layout'

const Page = () => {
  return (
    <ArticleLayout title="Help">
      <PageTitle title={SITE_NAME} subtitle={`Version: ${SITE_VERSION}`} />

      <TwoThirdsColLayout>
        <>
          <p className="my-8">
            This web site was developed using the following technologies:
          </p>

          <DropShadowDiv>
            <ul>
              <li className="mb-4">
                <p>React</p>
                <p>
                  <BlueLink href="https://reactjs.org" />
                </p>
              </li>
              <li className="mb-4">
                <p>Next.js</p>
                <p>
                  <BlueLink href="https://www.nextjs.org" />
                </p>
              </li>
              <li className="mb-4">
                <p>Tailwind</p>
                <p>
                  <BlueLink href="https://tailwindcss.com/" />
                </p>
              </li>
              <li className="mb-4">
                <p>HTML5</p>
                <p>
                  <BlueLink href="https://www.w3.org/html" />
                </p>
              </li>
              <li className="mb-4">
                <p>NPM</p>
                <p>
                  <BlueLink href="https://www.npmjs.com" />
                </p>
              </li>
              <li className="mb-4">
                <p>GitHub</p>
                <p>
                  <BlueLink href="https://github.com" />
                </p>
              </li>
            </ul>
          </DropShadowDiv>
        </>
        <></>
      </TwoThirdsColLayout>
    </ArticleLayout>
  )
}

export default Page
