import c from 'classnames'

export const PortfolioTabs = ({ currentTab, changeTab }) => (
  <div className="flex w-full mx-auto mb-9">
    <button className="w-full text-start" onClick={changeTab(0)}>
      <p className={c('font-rubik text-5xl transition-opacity', currentTab !== 0 && 'opacity-10')}>
        Portfolio Architect
      </p>
    </button>
    <button className="w-full text-end" onClick={changeTab(1)}>
      <p className={c('font-rubik text-5xl transition-opacity', currentTab !== 1 && 'opacity-10')}>
        Portfolio Simulator
      </p>
    </button>
  </div>
)
