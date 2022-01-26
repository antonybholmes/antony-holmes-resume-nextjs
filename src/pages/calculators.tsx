import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArticleLayout from '../components/layouts/article-layout'
import BaseLink from '../components/link/base-link'
import PageTitle from '../components/page-title'
import { faArrowRight, faCalculator } from '@fortawesome/free-solid-svg-icons'
import VCenterRow from '../components/v-center-row'
import HCenterRow from '../components/h-center-row'

const calcLink = (name: string, description: string, to: string) => {
  return (
    <li className="mb-8">
      <BaseLink
        href={to}
        className="flex flex-col items-center w-full h-full shadow-card hover:border-transparent hover:shadow-card rounded-lg animate-button"
      >
        <div className="h-full px-6 py-8">
          <HCenterRow className="w-full">
            <FontAwesomeIcon
              icon={faCalculator}
              size="4x"
              className="text-slate-300"
            />
          </HCenterRow>
          <div className="mt-8">
            <h4 className="font-semibold">{name}</h4>

            <p className="font-light">{description}</p>

            {/* <BaseLink
            href={to}
            
          >
            View
          </BaseLink> */}
          </div>
        </div>
        <VCenterRow className="justify-center p-4 text-sm uppercase font-semibold text-emerald-400 border-t border-slate-100 w-full">
          Run <FontAwesomeIcon icon={faArrowRight} size="sm" className="ml-2" />
        </VCenterRow>
      </BaseLink>
    </li>
  )
}

const Page = () => {
  return (
    <ArticleLayout title="Calculators">
      <PageTitle
        title={'Retirement Calculators'}
        subtitle={
          'Useful calculators and graphs to help you plan your financial future.'
        }
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {calcLink(
          'Fees',
          'Understand how even small changes in fees can have a big impact on your return.',
          '/calculators/fees'
        )}
        {calcLink(
          'Retirement',
          'See when you might reach your retirement goal.',
          '/calculators/retirement'
        )}
        {calcLink(
          'Save A Million',
          'See how long it will take you to save a million dollars.',
          '/calculators/save-a-million'
        )}
      </ul>
    </ArticleLayout>
  )
}

export default Page
