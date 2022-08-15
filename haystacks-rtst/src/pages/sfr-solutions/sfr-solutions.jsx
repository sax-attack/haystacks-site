import { useEffect } from 'react';
import { routes } from '../../router';

const SfrSolutions = () => {
  useEffect(() => {
    document.title = routes.market.title;
  }, []);

  return <div>Sfr Solutions</div>;
};

export { SfrSolutions };
