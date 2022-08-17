import React, { useEffect, useRef } from 'react';

import { ScrollStage } from './components/scroll-stage'
import CubeIcon from '../../../assets/cube-icon.svg';

const data = [
  {
    heading: 'MI-95',
    subheading: 'Predictive Market Intelligence',
    text: 'Uncover critical, forward-looking trends in 95% of US Markets.',
  },
  {
    heading: 'Portfolio Architect',
    subheading: '',
    text: 'Grow SFR portfolios from 0 to 200 — or 200 to 2,000 properties on one platform.',
  },
  {
    heading: 'Portfolio Simulator',
    subheading: '',
    text: 'Accurately project returns over the life of the investment and generate optimal hold/sell strategies. ',
  },
]


export const Solutions = () =>    
  {
    const stageRef = useRef(new ScrollStage())

    useEffect(() => {
      const stage = stageRef.current;

      stage.mount()

      return () => {
        stage.unmount()
      }
    }, []);
    

    return (
      <div className="content bg-background-solutions">
      <div className="scroll__stage w-full pointer-events-none">
        <div className="scroll__content w-full will-change-transform">
          {data.map(content => (
            <section className="section flex flex-col justify-between min-h-screen px-7 pb-20 pt-10">
              <div>
                <div className="flex flex-col items-center">
                  <img className="w-7" src={CubeIcon} alt="SolutionsLogo" />
                  <p className="text-sm md:text-2xl">Solutions</p>
                </div>
                <div className="flex flex-col items-center md:items-start pt-8">
                  <p className="text-4xl md:text-7xl w-2/5">{content.heading}</p>
                  {content.subheading && <p className="text-xl md:text-5xl">{content.subheading}</p>}
                </div>
              </div>
              <div className="flex justify-center md:justify-end text-center md:text-left">
                <p className="text-xs md:text-2xl md:w-2/5">{content.text}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
    )
  }
