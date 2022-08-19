import c from 'classnames'
import CubeIcon from '../../../assets/cube-icon.svg'

const tabs = [{ text: 'Portfolio Architect' }, { text: 'Portfolio Simulator' }]

export const PortfolioTabs = ({ currentTab, changeTab }) => (
  <div className="flex w-full mx-auto mb-9">
    {tabs.map((tab, index) => (
      <button className="flex flex-col items-center w-full" onClick={changeTab(index)}>
        <img src={CubeIcon} alt="cube" className={c('w-12 h-12 mb-4', currentTab !== index && 'opacity-0')} />
        <p className={c('font-rubik text-5xl transition-opacity', currentTab !== index && 'opacity-10')}>{tab.text}</p>
      </button>
    ))}
  </div>
)
