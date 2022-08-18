import React from 'react';
import c from 'classnames';

const BlogPost = ({ category, title, date, className }) => {
  return (
    <div className={c('pt-8 pb-20 mr-2 border-t-2', className)}>
      <div className="h-44">
        <p className="font-light text-base mb-4">{category}</p>
        <h2 className="text-3xl font-rubik max-w-sm">{title}</h2>
      </div>
      
      <div className="flex flex-row items-center justify-between">
        <p className="text-base font-light">{date}</p>
        <a href="#" className="underline font-light underline-offset-4">See Article</a>
      </div>
    </div>
  )
}

export { BlogPost };
