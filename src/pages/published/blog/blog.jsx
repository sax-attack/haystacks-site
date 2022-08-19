import React from 'react';
import { BlogPost } from '../../../common';

const posts = [
  {
    category: 'New York Business Journal',
    title: 'IT startup Electric reaches unicorn status and other NYC tech news',
    date: 'March 30, 2022',
  },
  {
    category: 'The Real Deal',
    title: 'Future City: Smart home combo',
    date: 'March 29, 2022',
  },
  {
    category: 'AlleyWatch',
    title: '#NYCtech Week in Review: 3/20/22 – 3/27/22',
    date: 'March 27, 2022',
  },
  {
    category: 'AlleyWatch: The Pulse of New York Tech Newsletter',
    title: 'The Pulse of New York Tech',
    date: 'March 24, 2022',
  },
  {
    category: 'AlleyWatch: The Pulse of New York Tech Newsletter',
    title: 'The Pulse of New York Tech',
    date: 'March 24, 2022',
  },
  {
    category: 'AlleyWatch: The Pulse of New York Tech Newsletter',
    title: 'The Pulse of New York Tech',
    date: 'March 24, 2022',
  },
];

const Blog = () => {
  return (
    <section className='container'>
      <div className="section">
        <div className='px-24'>
          <h2 className='text-center font-rubik md:text-left py-16 md:py-40 text-lg md:text-3xl max-w-4xl'>Featured Publications</h2>
        </div>

        <div className='flex flex-col md:flex-row justify-between flex-wrap'>
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              category={post.category}
              title={post.title}
              date={post.date}
              className='md:w-[47%]'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };
