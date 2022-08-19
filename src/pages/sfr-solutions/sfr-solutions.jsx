import { useEffect, useState } from 'react';
import { routes } from '../../router';
import { Divider } from '../../common/divider';
import { RequestForm } from '../../common';
import { PortfolioTabs } from './portfolio-tabs';
import { FeaturesSection } from './features-section/features-section';
import { PortfolioTabsContent } from './portfolio-tabs-content/portfolio-tabs-content';

const SfrSolutions = () => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    document.title = routes.market.title;
  }, []);

  const changeTab = (tab) => () => setCurrentTab(tab);

  return (
    <div>
      <section className='md:px-[34px] mt-10'>
        <div className='container'>
          <PortfolioTabs currentTab={currentTab} changeTab={changeTab} />

          <Divider className='w-full mx-auto hidden md:block' />

          <PortfolioTabsContent currentTab={currentTab} />

          <div className='bg-background-gray200 md:bg-transparent'>
            <FeaturesSection currentTab={currentTab} />
          </div>
          <p className='font-inter font-extralight text-2xl text-center px-24 pb-10 md:pb-0 hidden md:block'>
            Haystacks plugs our clients into deep-rooted property management infrastructure at large fund pricing.
          </p>
        </div>
      </section>

      <RequestForm className='pt-0' />
    </div>
  );
};

export { SfrSolutions };
