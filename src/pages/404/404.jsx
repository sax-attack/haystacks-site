import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router';

const Page404 = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate(routes.home.url, { replace: true });
  }, []);

  return <></>;
};

export { Page404 };
