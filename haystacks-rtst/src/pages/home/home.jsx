import { useEffect } from 'react';
import { routes } from '../../router';
import { HomeTopSection } from './top-section';
import { NumbersSection } from './numbers-section';
import { CardsSection } from './cards-section';
import { Solutions } from './solutions'
import { BigText } from '../../common';

const Home = () => {
  useEffect(() => {
    document.title = routes.home.title;
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(96, 96, 96, 0.2) 0%, rgba(96, 96, 96, 0.2) 50.38%, rgba(96, 96, 96, 0) 100%)',
      }}
    >
      <HomeTopSection />
      <BigText>
        Our AI and Machine Learning enables real estate investors to underwrite and optimize investments strategies in real-time.
      </BigText>
      <Solutions />
      <CardsSection />
      <NumbersSection />
    </div>
  );
};

export { Home };
