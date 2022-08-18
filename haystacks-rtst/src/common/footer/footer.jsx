import React from 'react';
import { Link } from '../link';
import { routes } from '../../router';
import Logo from '../../assets/logo-mock.png';

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
        <div className='flex flex-col text-typography-main hover:text-typography-main900 text-xs md:text-lg leading-7'>
          <a href='/' className='my-0.5 hover:text-typography-main900'>
            Address
          </a>
          <a href='/' className='my-0.5 hover:text-typography-main900'>
            Email
          </a>
          <a href='/' className='my-0.5 hover:text-typography-main900'>
            Phone
          </a>
          <a href='/' className='my-0.5 hover:text-typography-main900'>
            Social Channels
          </a>
        </div>
        <div className='hidden md:flex flex-col text-typography-main  text-lg leading-7'>
          <Link to={routes.market.url} className='my-0.5 hover:!text-typography-main900'>
            Market Solutions
          </Link>
          <Link to={routes.portfolio.url} className='my-0.5 hover:!text-typography-main900'>
            SFR Solutionsk
          </Link>
          <Link to={routes.people.url} className='my-0.5 hover:!text-typography-main900'>
            People
          </Link>
          <Link to={routes.published.url} className='my-0.5 hover:!text-typography-main900'>
            Buzz
          </Link>
        </div>
        <div className='flex flex-col text-typography-main text-xs md:text-lg leading-7'>
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
