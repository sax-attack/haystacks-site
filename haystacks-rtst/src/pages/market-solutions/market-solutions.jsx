import { useEffect } from 'react';
import { routes } from '../../router';

const MarketSolutions = () => {
  useEffect(() => {
    document.title = routes.market.title;
  }, []);

  return <div>Market Solutions</div>;
};

export { MarketSolutions };
