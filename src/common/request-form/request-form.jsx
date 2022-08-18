import React from 'react';
import { Button } from '../button';
import { Input } from '../input/input';

const RequestForm = () => (
  <section className='container py-24 md:py-32'>
    <div className='flex flex-col items-center'>
      <h2 className='text-sm md:text-3xl mb-12 text-center'>Request A Demo</h2>
      <p className='text-center text-xs md:text-base max-w-sm md:max-w-2xl font-light'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices, massa eu suscipit pellentesque, quam nunc aliquet
        sem, at volutpat orci tortor ut mi.
      </p>
    </div>

    <div className='flex flex-col md:flex-row mt-20'>
      <Input placeholder='First Name' className='mb-3 md:mb-7 mr-12 md:w-1/2 px-10 md:px-0' />
      <Input placeholder='Last Name' className='mb-3 md:mb-7 md:w-1/2 px-10 md:px-0' />
    </div>

    <Input placeholder='Email' className='mb-3 md:mb-7 px-10 md:px-0' />
    <Input placeholder='Company' className='mb-3 md:mb-7 px-10 md:px-0' />
    <Input placeholder='Position' className='mb-3 md:mb-7 px-10 md:px-0' />

    <p className='text-center text-base my-10'>What solution(s) are you interested in?</p>

    <div className='flex flex-col md:flex-row justify-around border-border-light-gray md:border-t md:border-b'>
      <p className='border-border-light-gray md:border-r text-xs md:text-base p-4 md:p-8 md:w-2/6 text-center'>MI-95 Predictive Market Insider</p>
      <p className='p-4 md:p-8 md:w-2/6 text-xs md:text-base text-center'>SFR Portfolio Architect</p>
      <p className='border-border-light-gray md:border-l text-xs md:text-base text-center p-4 md:p-8 md:w-2/6'>SFR Portfolio Simulator</p>
    </div>

    <div className='mt-16 flex flex-row justify-center'>
      <Button>Request a demo</Button>
    </div>
  </section>
);

export { RequestForm };
