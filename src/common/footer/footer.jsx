import React from 'react';
import { Link } from '../link';
import { routes } from '../../router';
import Logo from '../../assets/h-logo-dark.svg';

const ProductLogo = () => (
  <Link to={routes.home.url} className=''>
    <img src={Logo} alt='Haystacks logo' />
  </Link>
);

const Footer = () => {
  return (
    <footer className='shrink-0 bg-accent px-2 py-8 md:p-10 flex flex-col md:flex-row justify-around w-full'>
      <div className='self-center mb-5 md:mb-0'>{<ProductLogo />}</div>
      <div className='flex flex-row justify-around basis-8/12'>
        <p className='text-sm md:text-lg leading-7 text-typography-main hover:text-typography-main900'>
          1123 Broadway Suite 601,<br /> New York, NY 10010
        </p>
        
        <div className='hidden md:flex flex-col text-typography-main text-lg leading-7'>
          <Link to={routes.market.url} className='my-0.5 hover:!text-typography-main900'>
            Market Intelligence
          </Link>
          <Link to={routes.portfolio.url} className='my-0.5 hover:!text-typography-main900'>
            Portfolio Solutions
          </Link>
          <Link to={routes.people.url} className='my-0.5 hover:!text-typography-main900'>
            People
          </Link>
          <Link to={routes.published.url} className='my-0.5 hover:!text-typography-main900'>
            Published
          </Link>
        </div>
        <div className='flex flex-col text-typography-main text-sm md:text-lg leading-7 justify-end md:justify-start'>
          <a href='/' className='my-0.5 hover:text-typography-main900'>
            Terms + Conditions
          </a>
          <a href='/' className='my-0.5 hover:text-typography-main900'>
            Privacy Notice
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
