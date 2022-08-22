import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from '../link';
import { routes } from '../../router/routes';
import { useWindowDimensions } from '../../hooks';
import { constants } from '../../constants';
import Logo from '../../assets/h-logo.svg';
import BurgerMenuIcon from '../../assets/burger-menu-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';

const logo = <img src={Logo} className="mt-3" alt='Haystacks logo' />;

const Links = ({ isBiggerSm }) => {
  const className = isBiggerSm ? 'p-5' : 'text-2xl py-10 mx-12 border-border-gray500 border-y-[0.5px] font-extralight';
  return (
    <>
      <NavLink className={className} to={routes.market.url}>
        Market Solutions
      </NavLink>
      <NavLink className={className} to={routes.portfolio.url}>
        SFR Solutions
      </NavLink>
      <NavLink className={className} to={routes.people.url}>
        People
      </NavLink>
      <NavLink className={className} to={routes.published.url}>
        Published
      </NavLink>
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
      document.body.style.overflow = 'unset';
    }
  }, [isBurgerMenuOpened]);

  return (
    <header className='p-6 xl2:px-8'>
      <nav className={`flex ${isBiggerSm ? 'justify-end' : ''} items-center`}>
        <Link className='mr-auto' to={routes.home.url}>
          {logo}
        </Link>
        {isBiggerSm ? null : (
          <img
            src={BurgerMenuIcon}
            alt='burger menu'
            className='cursor-pointer'
            onClick={() => {
              setIsBurgerMenuOpened(true);
            }}
          />
        )}
        {isBiggerSm ? (
          <Links isBiggerSm />
        ) : isBurgerMenuOpened ? (
          <div className='fixed bg-background-burgerMenu h-screen w-screen top-0 right-0 z-20 flex flex-col text-center justify-center overflow-hidden'>
            <div className='mx-auto pb-10'>{logo}</div>
            <Links />
            <img
              src={CloseIcon}
              alt='close'
              className='cursor-pointer w-[20px] h-[20px] mx-auto my-10'
              onClick={() => {
                setIsBurgerMenuOpened(false);
              }}
            />
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export { Header };
