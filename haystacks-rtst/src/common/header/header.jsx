import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

const Header = () => {
  return (
    <header className='p-6'>
      <nav className='flex justify-end'>
        <Link className='p-5' to={routes.market.url}>
          Market Solutions
        </Link>
        <Link className='p-5' to={routes.portfolio.url}>
          SFR Solutions
        </Link>
        <Link className='p-5' to={routes.people.url}>
          People
        </Link>
        <Link className='p-5' to={routes.published.url}>
          Published
        </Link>
      </nav>
    </header>
  );
};

export { Header };
