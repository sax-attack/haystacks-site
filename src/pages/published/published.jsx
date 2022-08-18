import { useEffect } from 'react';
import { RequestForm } from '../../common';
import { routes } from '../../router';
import { Blog } from './blog';

const Published = () => {
  useEffect(() => {
    document.title = routes.published.title;
  }, []);

  return ( 
    <main>
      <Blog />
      <RequestForm />
    </main>
  )
};

export { Published };
