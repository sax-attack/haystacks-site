import { useEffect } from 'react';
import { routes } from '../../router';

const People = () => {
  useEffect(() => {
    document.title = routes.people.title;
  }, []);

  return <div>People</div>;
};

export { People };
