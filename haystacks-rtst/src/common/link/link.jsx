import { Link as ReactRouterLink } from 'react-router-dom';
import c from 'classnames';

const Link = ({ className, ...props }) => {
  return <ReactRouterLink className={c('hover:text-typography-light900 transition-all', className)} {...props} />;
};

export { Link };
