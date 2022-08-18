import c from 'classnames';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={c(
        'py-3.5 md:py-5 px-12 md:px-16 text-xs md:text-sm uppercase rounded-[240px] border-border-light border-[1px]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
