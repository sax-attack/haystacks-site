import { useEffect, useState } from 'react'
import { routes } from '../../router'
import { Divider } from '../../common/divider'
import { RequestForm } from '../../common'
import { PortfolioTabs } from './portfolio-tabs'
import { FeaturesSection } from './features-section/features-section'
import { PortfolioTabsContent } from './portfolio-tabs-content/portfolio-tabs-content'

const SfrSolutions = () => {
  const [currentTab, setCurrentTab] = useState(0)

  useEffect(() => {
    document.title = routes.market.title
  }, [])

  const changeTab = tab => () => setCurrentTab(tab)

  return (
    <div>
      <section className="section mt-32">
        <div className="container">
          <PortfolioTabs currentTab={currentTab} changeTab={changeTab} />

          <Divider className="w-full mx-auto" />

          <PortfolioTabsContent currentTab={currentTab} />

          <FeaturesSection />
        </div>
      </section>
      
      <RequestForm />
    </div>
  )
}

export { SfrSolutions }
