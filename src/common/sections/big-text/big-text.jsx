import c from 'classnames';

const BigText = ({ children, className, paragraphClassName, ...props }) => {
  return (
    <div className={c('w-full px-5 md:px-20 py-10 md:py-52 md:max-w-[1000px] 2xl:max-w-[1300px] mx-auto', className)} {...props}>
      <p className={c('max-w-[80%] text-lg md:text-4xl text-center my-0 mx-auto leading-10', paragraphClassName)}>{children}</p>
    </div>
  );
};

export { BigText };
