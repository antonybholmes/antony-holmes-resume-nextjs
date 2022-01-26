import { useEffect, useState } from 'react'
import BlueAlert from '../../components/alert/blue-alert'
import FeeGraph from '../../components/graph/fee-graph'
import Sidebar from '../../components/graph/sidebar'
import SidebarHeading from '../../components/graph/sidebar-heading'
import Slider from '../../components/graph/slider'
import HCenterRow from '../../components/h-center-row'
import ArticleLayout from '../../components/layouts/article-layout'
import MainSideCol from '../../components/main-side-col'
import PageTitle from '../../components/page-title'
import TextBox from '../../components/textbox'

const Page = () => {
  const [arr, setARR] = useState(8)
  const [er, setER] = useState(1)
  const [frontLoad, setFrontLoad] = useState(5)
  const [startingBalance, setStartingBalance] = useState(10000)
  const [years, setYears] = useState(40)
  const [savings, setSavings] = useState(1000)
  const [data1, setData1] = useState<number[]>([])
  const [data2, setData2] = useState<number[]>([])

  const createData = () => {
    const d1: number[] = []
    const d2: number[] = []
    let b1 = startingBalance
    let b2 = startingBalance * (1 - frontLoad / 100)

    const inc = savings * 12

    for (var i = 0; i < years; ++i) {
      d1.push(b1)
      d2.push(b2)
      b1 = b1 * (1 + arr / 100) + inc
      b2 = b2 * (1 + (arr - er) / 100) + inc
    }

    setData1(
      d1.map((x: number) => {
        return x / 1000000
      })
    )

    setData2(
      d2.map((x: number) => {
        return x / 1000000
      })
    )
  }

  // useEffect(() => {
  //   createData()
  // },
  // [])

  useEffect(() => {
    createData()
  }, [arr, er, startingBalance, frontLoad, savings, years])

  const handleARRChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setARR(v)
    }
  }

  const handleERChange = (text: string) => {
    let v = parseFloat(text)

    if (!isNaN(v)) {
      setER(v)
    }
  }

  const handleFrontEndChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setFrontLoad(v)
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

  const handleYearsChange = (text: string) => {
    let v = parseInt(text)

    if (!isNaN(v)) {
      setYears(v)
    }
  }

  return (
    <ArticleLayout title="Fees" page="Calculators">
      <PageTitle
        title="Fees Calculator"
        subtitle="Understand how fees affect your retirement savings"
      />
      <MainSideCol>
        <div>
          <FeeGraph data1={data1} data2={data2} />

          <HCenterRow className="mb-16">
            <BlueAlert>
              Fees could cost you $
              {Math.round(
                (data1[data1.length - 1] - data2[data2.length - 1]) * 1000000
              ).toLocaleString()}{' '}
              over {years} years!
            </BlueAlert>
          </HCenterRow>
        </div>

        <Sidebar>
          <div>
            <SidebarHeading
              title="Annual Rate Of Return"
              tooltip="How much you expect your assets to increase by per year."
            />
            <TextBox
              value={arr}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleARRChange}
            />
            {/* <RangeSlider
                  value={arr}
                  onChange={(v: number) => setARR(v)}
                  className="mt-4"
                /> */}
            <Slider
              value={arr}
              onChange={(v: number) => setARR(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            <SidebarHeading
              title="Expense Ratio"
              tooltip="Yearly cost to own fund as % of assets."
            />
            <TextBox
              value={er}
              onChange={handleERChange}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
            />
            <Slider
              min={0}
              max={100}
              value={er}
              onChange={(v: number) => setER(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            <SidebarHeading
              title="Front-End Load"
              tooltip="Cost to buy cost. Avoid funds with this."
            />
            <TextBox
              value={frontLoad}
              prefix="%"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleFrontEndChange}
            />
            <Slider
              value={frontLoad}
              onChange={(v: number) => setFrontLoad(v)}
              className="mt-2"
            />
          </div>
          <div className="mt-8">
            <SidebarHeading
              title="Starting Balance"
              tooltip="How much money you start with."
            />
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
            <SidebarHeading
              title="Savings Per Month"
              tooltip="How much you save a month."
            />
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
            <SidebarHeading
              title="Years"
              tooltip="How many years you want to invest for."
            />
            <TextBox
              value={years}
              prefix="years"
              prefixLeft={false}
              alignLeft={false}
              onChange={handleYearsChange}
            />
            <Slider
              value={years}
              min={1}
              max={100}
              onChange={(v: number) => setYears(v)}
              className="mt-2"
            />
          </div>
        </Sidebar>
      </MainSideCol>
    </ArticleLayout>
  )
}

export default Page
