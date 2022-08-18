import { useEffect } from 'react';
import { RequestForm } from '../../common';
import { routes } from '../../router';

const Published = () => {
  useEffect(() => {
    document.title = routes.published.title;
  }, []);

  return ( 
    <div>
      <RequestForm />
    </div>
  )
};

export { Published };
