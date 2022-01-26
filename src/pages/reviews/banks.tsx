import ArticleLayout from '../../components/layouts/article-layout'
import StarRating from '../../components/star-rating'
import allBankAccounts from '../../../_content/reviews/banks.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageTitle from '../../components/page-title'
import VCenterRow from '../../components/v-center-row'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import DropShadowExpand from '../../components/drop-shadow-expand'
import BaseCol from '../../components/base-col'
import TwoThirdsColLayout from '../../components/two-thirds-col-layout'
import BlueArrowLink from '../../components/link/blue-arrow-link'

const Page = () => (
  <ArticleLayout title="Bank Accounts">
    <PageTitle title="Bank Accounts" subtitle="Where to save your money" />
    <TwoThirdsColLayout>
      <>
        {allBankAccounts.map(
          (
            bankgroup: {
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
            bankgroupIndex: number
          ) => {
            return (
              <div key={bankgroupIndex}>
                <h2 className="uppercase font-light text-xl tracking-wide mb-4">
                  {bankgroup.name}
                </h2>

                {bankgroup.cards.map(
                  (
                    bank: {
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
                      <DropShadowExpand title={bank.name} key={cardIndex}>
                        <>
                          <p className="mt-4">{bank.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mt-8">
                            <BaseCol className="items-center md:items-start mb-8">
                              <StarRating rating={bank.rating} />
                              <BlueArrowLink href={bank.url} className="mt-4">
                                Visit website
                              </BlueArrowLink>
                            </BaseCol>
                            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 md:gap-8">
                              {' '}
                              <div>
                                <VCenterRow
                                  center={true}
                                  className="text-emerald-400 py-2 rounded"
                                >
                                  <h4 className="mr-2">Pros</h4>
                                  <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className="ml-2 "
                                  />
                                </VCenterRow>
                                <ul className="list-outside list-disc ml-2 p-2">
                                  {bank.pros.map(
                                    (pro: string, index: number) => {
                                      return <li key={index}>{pro}</li>
                                    }
                                  )}
                                </ul>
                              </div>
                              <div>
                                <VCenterRow
                                  center={true}
                                  className="text-rose-400 py-2 rounded"
                                >
                                  <h4 className="mr-2">Cons</h4>
                                  <FontAwesomeIcon
                                    icon={faThumbsDown}
                                    className="ml-2"
                                  />
                                </VCenterRow>

                                <ul className="list-outside list-disc ml-2 p-2">
                                  {bank.cons.map(
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
