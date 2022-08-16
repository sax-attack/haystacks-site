import c from 'classnames';

const BigText = ({ children, className, paragraphClassName, ...props }) => {
  return (
    <div className={c('w-full px-20 py-52', className)} {...props}>
      <p className={c('max-w-[80%] text-lg md:text-4xl text-center my-0 mx-auto leading-10', paragraphClassName)}>{children}</p>
    </div>
  );
};

export { BigText };
