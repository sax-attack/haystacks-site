import React from 'react';
import { Button } from '../button';
import { Input } from '../input/input';


const RequestForm = () => (
  <section className="container py-32">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mb-5 text-center">Request A Demo</h2>
      <p className="text-center text-base max-w-2xl font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras ultrices, massa eu suscipit pellentesque, quam nunc aliquet sem, at volutpat orci tortor ut mi.
      </p>
    </div>

    <div className="flex flex-row mt-20">
      <Input placeholder="First Name" className="mb-7 mr-12 w-1/2" />
      <Input placeholder="Last Name" className="mb-7 w-1/2" />
    </div>

    <Input placeholder="Email" className="mb-7" />
    <Input placeholder="Company" className="mb-7" />
    <Input placeholder="Position" className="mb-7" />

    <p className="text-center text-base my-10">What solution(s) are you interested in?</p>

    <div className="flex flex-row justify-around border-t-2	border-b-2">
      <p className="border-r-2 text-base p-8 w-2/6 text-center">MI-95 Predictive Market Insider</p>
      <p className="p-8 w-2/6 text-base text-center">SFR Portfolio Architect</p>
      <p className="border-l-2 text-base text-center p-8 w-2/6">SFR Portfolio Simulator</p>
    </div>
    
    <div className="mt-16 flex flex-row justify-center">
      <Button>Request a demo</Button>
    </div>
  </section>
)

export { RequestForm };