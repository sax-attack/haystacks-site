import React from 'react';
import c from 'classnames';
import ArrowUp from '../../assets/arrow-up.svg';

const BlogPost = ({ category, title, date, className }) => {
  return (
    <div className={c('pt-3.5 md:pt-8 pb-9 md:pb-20 md:mr-2 border-t-[0.5px]', className)}>
      <div className='h-28 md:h-52'>
        <p className='font-extralight text-xs md:text-base mb-2 md:mb-4'>{category}</p>
        <h2 className='text-lg md:text-3xl font-rubik max-w-sm'>{title}</h2>
      </div>

      <div className='flex flex-row items-center justify-between'>
        <p className='text-xs md:text-base font-extralight'>{date}</p>
        <a href='#' className='flex flex-row underline underline-offset-4'>
          <p className="font-extralight text-xs md:text-base mr-2">See Article</p>
          <img src={ArrowUp} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export { BlogPost };
