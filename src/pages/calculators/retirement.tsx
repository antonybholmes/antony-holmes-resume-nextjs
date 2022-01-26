import { useEffect, useState } from 'react'
import RetirementGraph from '../../components/graph/retirement-graph'
import Sidebar from '../../components/graph/sidebar'
import SidebarHeading from '../../components/graph/sidebar-heading'
import Slider from '../../components/graph/slider'
import ArticleLayout from '../../components/layouts/article-layout'
import MainSideCol from '../../components/main-side-col'
import PageTitle from '../../components/page-title'
import TextBox from '../../components/textbox'

const heading = (text: string) => {
  return <div className="font-semibold text-sm mb-1">{text}</div>
}

const Page = () => {
  const [arr, setARR] = useState(8)
  const [spendingRate, setSpendingRate] = useState(4)
  const [er, setER] = useState(2)
  const [startingBalance, setStartingBalance] = useState(10000)
  const [contributionYears, setContributionYears] = useState(40)
  const [drawDownYears, setDrawDownYears] = useState(30)
  const [savings, setSavings] = useState(10000)
  const [data1, setData1] = useState<number[]>([])

  const createData = () => {
    const d1: number[] = []
    let b1 = startingBalance / 1000000

    for (var i = 0; i < contributionYears; ++i) {
      d1.push(b1)
      b1 = b1 * (1 + arr / 100) * (1 - er / 2000) + savings / 1000000
    }

    for (var i = 0; i < drawDownYears; ++i) {
      d1.push(b1)
      b1 = b1 * (1 - spendingRate / 100) * (1 + arr / 100) * (1 - er / 2000)
    }

    setData1(d1)
  }

  // useEffect(() => {
  //   createData()
  // },
  // [])

  useEffect(() => {
    createData()
  }, [
    arr,
    er,
    startingBalance,
    savings,
    contributionYears,
    drawDownYears,
    spendingRate,
  ])

  const handleARRChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setARR(v)
    }
  }

  const handleERChange = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setER((v / 100) * 2000)
    }
  }

  const handleStartingBalanceChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setStartingBalance(v)
    }
  }

  const handleSavingsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setSavings(v)
    }
  }

  const handleContributionYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setContributionYears(v)
    }
  }

  const handleDrawDownYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setDrawDownYears(v)
    }
  }

  const handleSpendingRate = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setSpendingRate(v)
    }
  }

  return (
    <ArticleLayout title="Retirement Calculator" page="Calculators">
      <PageTitle
        title="Retirement Calculator"
        subtitle="See if you're on target for
        retirement"
      />

      <MainSideCol>
        <div>
          <RetirementGraph data1={data1} />
        </div>

        <Sidebar>
          <div>
            {heading('Annual Rate Of Return')}
            <TextBox
              value={arr}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleARRChange}
            />
            <Slider
              value={arr}
              onChange={(v: number) => setARR(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            {heading('Expense Ratio')}
            <TextBox
              value={((er / 2000) * 100).toFixed(2)}
              onChange={handleERChange}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
            />
            <Slider
              min={0}
              max={2000}
              value={er}
              onChange={(v: number) => setER(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            {heading('Starting Balance')}
            <TextBox
              value={startingBalance}
              prefix="$"
              onChange={handleStartingBalanceChange}
            />
            <Slider
              value={startingBalance}
              min={10000}
              max={1000000}
              step={10000}
              onChange={(v: number) => setStartingBalance(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            {heading('Savings Per Year')}
            <TextBox
              value={savings}
              prefix="$"
              onChange={handleSavingsChange}
            />
            <Slider
              value={savings}
              min={0}
              max={100000}
              step={1000}
              onChange={(v: number) => setSavings(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            {heading('Contribution Years')}
            <TextBox
              value={contributionYears}
              prefix="years"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleContributionYearsChange}
            />
            <Slider
              value={contributionYears}
              min={1}
              max={100}
              onChange={(v: number) => setContributionYears(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            <SidebarHeading
              title="Draw Down Years"
              tooltip="Number of years to spend your retirement funds without contributing."
            />
            <TextBox
              value={drawDownYears}
              prefix="years"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleDrawDownYearsChange}
            />
            <Slider
              value={drawDownYears}
              min={1}
              max={100}
              onChange={(v: number) => setDrawDownYears(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            <SidebarHeading
              title="Spending rate"
              tooltip="% of portfolio you want to spend each year of retirement."
            />
            <TextBox
              value={spendingRate}
              onChange={handleSpendingRate}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
            />
            <Slider
              min={0}
              max={100}
              value={spendingRate}
              onChange={(v: number) => setSpendingRate(v)}
              className="mt-2"
            />
          </div>
        </Sidebar>
      </MainSideCol>
    </ArticleLayout>
  )
}

export default Page
