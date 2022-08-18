import { NavLink as RouterNavLink } from 'react-router-dom';
import c from 'classnames';

const NavLink = ({ className, children, ...props }) => {
  return (
    <RouterNavLink className={c('', className)} {...props}>
      {({ isActive }) => (isActive ? <b>{children}</b> : children)}
    </RouterNavLink>
  );
};

export { NavLink };
