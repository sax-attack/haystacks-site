import { useEffect } from 'react';
import { routes } from '../../router';

const Home = () => {
  useEffect(() => {
    document.title = routes.home.title;
  }, []);

  return <div>Home</div>;
};

export { Home };
