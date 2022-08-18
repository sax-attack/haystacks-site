import React from 'react';
import c from 'classnames';

const BlogPost = ({ category, title, date, className }) => {
  return (
    <div className={c('pt-3.5 md:pt-8 pb-9 md:pb-20 md:mr-2 border-t-[0.5px]', className)}>
      <div className='h-28 md:h-44'>
        <p className='font-light text-xs md:text-base mb-2 md:mb-4'>{category}</p>
        <h2 className='text-lg md:text-3xl font-rubik max-w-sm'>{title}</h2>
      </div>

      <div className='flex flex-row items-center justify-between'>
        <p className='text-xs md:text-base font-light'>{date}</p>
        <a href='#' className='underline text-xs md:font-light underline-offset-4'>
          See Article
        </a>
      </div>
    </div>
  );
};

export { BlogPost };
