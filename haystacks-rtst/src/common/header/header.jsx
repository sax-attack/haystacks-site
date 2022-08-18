import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../link';
import { routes } from '../../router/routes';
import { useWindowDimensions } from '../../hooks';
import { constants } from '../../constants';
import Logo from '../../assets/logo-mock.png';

const logo = <img src={Logo} alt='Haystacks logo' />;

const Links = ({ isBiggerSm }) => {
  const className = isBiggerSm ? 'p-5' : 'text-2xl py-3.5';
  return (
    <>
      <Link className={className} to={routes.market.url}>
        Market Solutions
      </Link>
      <Link className={className} to={routes.portfolio.url}>
        SFR Solutions
      </Link>
      <Link className={className} to={routes.people.url}>
        People
      </Link>
      <Link className={className} to={routes.published.url}>
        Published
      </Link>
    </>
  );
};

const Header = () => {
  const { width } = useWindowDimensions();
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const { pathname } = useLocation();

  const isBiggerSm = width > constants.breakpoints.sm;

  useEffect(() => {
    setIsBurgerMenuOpened(false);
  }, [pathname]);

  useEffect(() => {
    if (isBurgerMenuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isBurgerMenuOpened]);

  return (
    <header className='p-6 xl2:px-8'>
      <nav className={`flex ${isBiggerSm ? 'justify-end' : ''} items-center`}>
        {isBiggerSm ? (
          <Link className='mr-auto' to={routes.home.url}>
            {logo}
          </Link>
        ) : (
          <button
            onClick={() => {
              setIsBurgerMenuOpened((prevValue) => !prevValue);
            }}
            className='z-30'
          >
            {logo}
          </button>
        )}
        {isBiggerSm ? (
          <Links isBiggerSm />
        ) : isBurgerMenuOpened ? (
          <div className='fixed bg-background-burgerMenu h-screen w-screen top-0 right-0 z-20 flex flex-col text-center justify-center overflow-hidden'>
            <Links />
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export { Header };
