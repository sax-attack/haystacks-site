import c from 'classnames';
import { Link } from '../';
import ArrowRightIcon from '../../assets/arrow-right.svg';

const Card = ({ className, children, maxWidth = '492px', ...props }) => {
  return (
    <div
      className={c(
        `border-border-gray rounded-[35px] border-[1px] bg-background-card p-5 md:p-10 pb-16 max-w-[${maxWidth}] relative`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Heading = ({ children, className }) => <h4 className={c('text-xl md:text-3xl mb-2', className)}>{children}</h4>;
const Subheading = ({ children, className }) => <p className={c('text-[9px] md:text-lg mb-7 md:mb-18', className)}>{children}</p>;
const Text = ({ children, className }) => <p className={c('font-light text-xs md:text-base', className)}>{children}</p>;
const RightIcon = ({ className, to = '/' }) => (
  <Link to={to} className={c('absolute bottom-[29px] right-[36px]', className)}>
    <img src={ArrowRightIcon} alt='arrow-right' className='w-2 md:w-full' />
  </Link>
);

Card.Heading = Heading;
Card.Subheading = Subheading;
Card.Text = Text;
Card.RightIcon = RightIcon;

export { Card };
