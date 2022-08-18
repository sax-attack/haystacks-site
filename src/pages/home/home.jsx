import { Fragment, useEffect } from 'react';
import { routes } from '../../router';
import { HomeTopSection } from './top-section';
import { NumbersSection } from './numbers-section';
import { CardsSection } from './cards-section';
import { Solutions } from './solutions'
import { BigText, RequestForm } from '../../common';

const Home = () => {
  useEffect(() => {
    document.title = routes.home.title;
  }, []);

  return (
    <Fragment>
      <HomeTopSection />
      <BigText>
        Our AI and Machine Learning enables real estate investors to underwrite and optimize investments strategies in real-time.
      </BigText>
      <Solutions />
      <CardsSection />
      <NumbersSection />
      <RequestForm />
    </Fragment>
  );
};

export { Home };
