import ArticleLayout from '../../components/layouts/article-layout'
import StarRating from '../../components/star-rating'
import allBrokerages from '../../../_content/reviews/brokerages.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from '../../components/page-title'
import VCenterRow from '../../components/v-center-row'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import DropShadowExpand from '../../components/drop-shadow-expand'
import TwoThirdsColLayout from '../../components/two-thirds-col-layout'
import BaseCol from '../../components/base-col'
import BlueArrowLink from '../../components/link/blue-arrow-link'

const Page = () => (
  <ArticleLayout title="Brokerages">
    <PageTitle title="Brokerages" subtitle="Where to investor your money" />
    <TwoThirdsColLayout>
      <>
        {allBrokerages.map((brokerage, brokerageIndex) => {
          return (
            <DropShadowExpand title={brokerage.name} key={brokerageIndex}>
              <>
                <p className="mt-4">{brokerage.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mt-8">
                  <BaseCol className="items-center md:items-start mb-8">
                    <StarRating rating={brokerage.rating} />
                    <BlueArrowLink href={brokerage.url} className="mt-4">
                      Visit website
                    </BlueArrowLink>
                  </BaseCol>
                  <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-8">
                    <div>
                      <VCenterRow
                        center={true}
                        className="text-emerald-400 pb-2"
                      >
                        <h4 className="mr-2">Pros</h4>
                        <FontAwesomeIcon icon={faThumbsUp} className="ml-2 " />
                      </VCenterRow>
                      <ul className="list-outside list-disc ml-2 p-2">
                        {brokerage.pros.map((pro: string, index: number) => {
                          return <li key={index}>{pro}</li>
                        })}
                      </ul>
                    </div>
                    <div>
                      <VCenterRow center={true} className="text-rose-400 pb-2">
                        <h4 className="mr-2">Cons</h4>
                        <FontAwesomeIcon icon={faThumbsDown} className="ml-2" />
                      </VCenterRow>

                      <ul className="list-outside list-disc ml-2 p-2">
                        {brokerage.cons.map((con: string, index: number) => {
                          return <li key={index}>{con}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            </DropShadowExpand>
          )
        })}
      </>
      <></>
    </TwoThirdsColLayout>
  </ArticleLayout>
)

export default Page
