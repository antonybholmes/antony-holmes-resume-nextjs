import ArticleLayout from '../../components/layouts/article-layout'
import portfolios from '../../../_content/reviews/portfolios.json'
import PageTitle from '../../components/page-title'
import { useState } from 'react'
import DropShadowExpand from '../../components/drop-shadow-expand'
import TwoThirdsColLayout from '../../components/two-thirds-col-layout'
import cn from '../../lib/class-names'
import BlueArrowLink from '../../components/link/blue-arrow-link'

// interface Props {
//   portfolio: any
// }

// const PortfolioTagsList = ({ portfolio }: Props) => (
//   <VCenterRow className="mt-4">
//     <div className="mr-4">
//       <FontAwesomeIcon icon="tags" />
//     </div>

//     <ol>
//       {portfolio.tags.map((tag: string, index: number) => {
//         return (
//           <li className={`inline-block ${index > 0 ? 'pl-2' : ''}`} key={index}>
//             <BaseLink
//               href={getPortfolioTagUrl(tag)}
//               className={`inline-block bg-slate-100 rounded-full px-3 py-2 text-xs font-medium uppercase trans-ani`}
//             >
//               {tag}
//             </BaseLink>
//           </li>
//         )
//       })}
//     </ol>
//   </VCenterRow>
// )

interface IProps {
  portfolio: any
  index: number
}

const Portfolio = ({ portfolio, index }: IProps) => {
  const [expanded, setExpanded] = useState(true)

  const _handleClick = () => {
    setExpanded(!expanded)
  }

  const maxRows: number = Math.max(
    ...portfolio.brokerages.map((brokerage: any) => {
      return brokerage.stocks.length
    })
  )

  return (
    <DropShadowExpand key={index} title={`${index + 1}. ${portfolio.name}`}>
      <>
        <p className="mt-4">{portfolio.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {portfolio.brokerages.map((brokerage: any, porfolioIndex: number) => {
            let bg

            switch (brokerage.name) {
              case 'Fidelity':
                bg = 'text-emerald-500'
                break
              case 'Schwab':
                bg = 'text-blue-500'
                break
              default:
                bg = 'text-rose-500'
                break
            }
            return (
              <div key={porfolioIndex}>
                <div key={porfolioIndex}>
                  <h3 className="font-bold tracking-wide text-xs text-slate-500">
                    {brokerage.name}
                  </h3>

                  <table key={porfolioIndex} className="w-full mt-2">
                    <tbody>
                      {brokerage.stocks.map(
                        (stock: any, brokerageIndex: number) => {
                          return (
                            <tr key={brokerageIndex}>
                              <td className="mb-2 truncate m-0 p-0">
                                <p className="font-semibold">{stock.name}</p>
                                <p>{stock.ticker}</p>
                              </td>

                              <td className="mb-2">
                                {Math.round(stock.pc * 100)}%
                              </td>
                            </tr>
                          )
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>

        {/* <PortfolioTagsList portfolio={portfolio} /> */}

        <div className="mt-8">
          <BlueArrowLink href={portfolio.url}>Backtest Portfolio</BlueArrowLink>
        </div>
      </>
    </DropShadowExpand>
  )
}

const Page = () => {
  return (
    <ArticleLayout title="Portfolios">
      <PageTitle
        title="Portfolios"
        subtitle="Simple porfolios to help you save for retirement"
      />
      <TwoThirdsColLayout>
        <ul>
          {portfolios.map((portfolio: any, index: number) => {
            return (
              <li key={index}>
                <Portfolio index={index} portfolio={portfolio} />
              </li>
            )
          })}
        </ul>
        <></>
      </TwoThirdsColLayout>
    </ArticleLayout>
  )
}

export default Page
