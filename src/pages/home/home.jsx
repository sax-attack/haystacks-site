import { Fragment, useEffect } from 'react';
import { routes } from '../../router';
import { HomeTopSection } from './top-section';
import { NumbersSection } from './numbers-section';
import { CardsSection } from './cards-section';
import { Solutions } from './solutions';
import { BigText, RequestForm } from '../../common';

const Home = () => {
  useEffect(() => {
    document.title = routes.home.title;
  }, []);

  return (
    <Fragment>
      <HomeTopSection />
      <div className='bg-background-gray200 md:bg-transparent'>
        <BigText>
          Our AI and Machine Learning enables real estate investors to underwrite and optimize investments strategies in
          real-time.
        </BigText>
      </div>
      <Solutions />
      <CardsSection />
      <NumbersSection />
      <div className='bg-background-gray200 md:bg-transparent'>
        <BigText className='md:!pb-20'>
          Haystacks.AI's senior leadership has raised over $4+ billion for RE investments from leading institutional investors.
        </BigText>
      </div>
      <RequestForm />
    </Fragment>
  );
};

export { Home };
