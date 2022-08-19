import c from 'classnames';
import { useWindowDimensions } from '../../../hooks';
import { constants } from '../../../constants';
import CubeIcon from '../../../assets/cube-icon.svg';

const tabs = [{ text: 'Portfolio Architect' }, { text: 'Portfolio Simulator' }];

export const PortfolioTabs = ({ currentTab, changeTab }) => {
  const { width } = useWindowDimensions();

  const isBiggerSm = width > constants.breakpoints.sm;

  return (
    <div className='flex w-full mx-auto mb-9'>
      {tabs.map((tab, index) =>
        isBiggerSm ? (
          <button className='flex flex-col items-center w-full' onClick={changeTab(index)}>
            <img src={CubeIcon} alt='cube' className={c('w-12 h-12 mb-4', currentTab !== index && 'opacity-0')} />
            <p className={c('font-rubik text-5xl transition-opacity', currentTab !== index && 'opacity-10')}>{tab.text}</p>
          </button>
        ) : (
          <button
            className={`flex flex-col items-center w-full text-xs p-1 m-1 text-typography-light60 ${
              currentTab !== index ? '' : 'border-[1px] font-rubik border-[0.5px] rounded-[62px] !text-typography-light'
            }`}
            onClick={changeTab(index)}
          >
            {tab.text}
          </button>
        )
      )}
    </div>
  );
};
