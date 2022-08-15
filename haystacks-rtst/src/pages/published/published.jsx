import { useEffect } from 'react';
import { routes } from '../../router';

const Published = () => {
  useEffect(() => {
    document.title = routes.published.title;
  }, []);

  return <div>Published</div>;
};

export { Published };
