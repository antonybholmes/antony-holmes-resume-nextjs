import ArticleLayout from '../../components/layouts/article-layout'
import StarRating from '../../components/star-rating'
import allcards from '../../../_content/reviews/credit-cards.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from '../../components/page-title'
import VCenterRow from '../../components/v-center-row'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import DropShadowExpand from '../../components/drop-shadow-expand'
import TwoThirdsColLayout from '../../components/two-thirds-col-layout'
import BaseCol from '../../components/base-col'
import BlueArrowLink from '../../components/link/blue-arrow-link'

const Page = () => (
  <ArticleLayout title="Credit Cards">
    <PageTitle
      title="Credit Cards"
      subtitle="A curated selection of credit cards"
    />
    <TwoThirdsColLayout>
      <>
        {allcards.map(
          (
            cardgroup: {
              name: string
              description: string
              cards: {
                name: string
                description: string
                rating: number
                fee: string
                url: string
                pros: string[]
                cons: string[]
              }[]
            },
            cardGroupIndex: number
          ) => {
            return (
              <div key={cardGroupIndex} className="mb-8">
                <h2 className="uppercase font-light text-xl tracking-wide mb-4">
                  {cardgroup.name}
                </h2>

                {cardgroup.cards.map(
                  (
                    card: {
                      name: string
                      description: string
                      rating: number
                      fee: string
                      url: string
                      pros: string[]
                      cons: string[]
                    },
                    cardIndex: number
                  ) => {
                    return (
                      <DropShadowExpand title={card.name} key={cardIndex}>
                        <>
                          <p className="mt-4">{card.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-8">
                            <BaseCol className="items-center md:items-start mb-8">
                              <StarRating rating={card.rating} />

                              <h4 className="mt-4">Annual fee: {card.fee}</h4>
                              <BlueArrowLink href={card.url} className="mt-4">
                                Visit website
                              </BlueArrowLink>
                            </BaseCol>
                            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <VCenterRow
                                  center={true}
                                  className="text-emerald-400 pb-2"
                                >
                                  <h4 className="mr-2">Pros</h4>
                                  <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className="ml-2 "
                                  />
                                </VCenterRow>
                                <ul className="list-outside list-disc ml-2 p-2">
                                  {card.pros.map(
                                    (pro: string, index: number) => {
                                      return <li key={index}>{pro}</li>
                                    }
                                  )}
                                </ul>
                              </div>
                              <div>
                                <VCenterRow
                                  center={true}
                                  className="text-rose-400 pb-2"
                                >
                                  <h4 className="mr-2">Cons</h4>
                                  <FontAwesomeIcon
                                    icon={faThumbsDown}
                                    className="ml-2"
                                  />
                                </VCenterRow>

                                <ul className="list-outside list-disc ml-2 p-2">
                                  {card.cons.map(
                                    (con: string, index: number) => {
                                      return <li key={index}>{con}</li>
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      </DropShadowExpand>
                    )
                  }
                )}
              </div>
            )
          }
        )}
      </>
      <></>
    </TwoThirdsColLayout>
  </ArticleLayout>
)

export default Page
