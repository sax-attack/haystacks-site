import React, { useEffect, useRef, useState } from 'react'

import { ScrollStage } from './components/scroll-stage'
import CubeIcon from '../../../assets/cube-icon.svg'
import ArrowDownIcon from '../../../assets/arrow-down.svg'
import c from 'classnames'

const data = [
  {
    heading: 'LENS',
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

export const Solutions = () => {
  const [slide, setSlide] = useState(0)
  const stageRef = useRef(new ScrollStage())

  useEffect(() => {
    const stage = stageRef.current

    stage.mount()

    return () => {
      stage.unmount()
    }
  }, [])

  const nextSlide = () => {
    const next = slide + 1

    setSlide(next)
    stageRef.current.updateScrollAnimations(next / 2)
  }

  const previousSlide = () => {
    const previous = slide - 1

    setSlide(previous)
    stageRef.current.updateScrollAnimations(previous / 2)
  }

  const renderSlide = () => {
    const content = data[slide]
    const previousDisabled = slide === 0
    const nextDisabled = slide === 2

    return (
      <section className="section flex flex-col justify-between min-h-screen px-7 pb-20 pt-10">
        <div>
          <div className="flex flex-col items-center">
            <img className="w-7" src={CubeIcon} alt="SolutionsLogo" />
            <p className="text-sm md:text-2xl">Solutions</p>
          </div>

          <div className="flex flex-col items-center md:items-start pt-8 md:pt-20 text-center md:text-left">
            <p className="text-5xl md:text-7xl w-2/5">{content.heading}</p>
            {content.subheading && <p className="text-xl md:text-5xl md:w-2/5">{content.subheading}</p>}
          </div>
        </div>

        <div className="flex justify-center md:justify-between items-center text-center md:text-left">
          <div className="flex flex-col mr-5 cursor-pointer">
            <button onClick={previousSlide} disabled={previousDisabled}>
              <img
                className={c('w-10 mb-5 rotate-180', previousDisabled && 'opacity-50')}
                src={ArrowDownIcon}
                alt="Arrow down"
              />
            </button>

            <button onClick={nextSlide} disabled={nextDisabled}>
              <img
                className={c('w-10', nextDisabled && 'opacity-50')}
                src={ArrowDownIcon}
                alt="Arrow down"
              />
            </button>
          </div>
          <p className="text-xs md:text-2xl w-2/5">{content.text}</p>
        </div>
      </section>
    )
  }

  return (
    <div className="content relative bg-background-solutions">
      <div className="scroll__stage container">
        <div className="scroll__content w-full will-change-transform">{renderSlide()}</div>
      </div>
    </div>
  )
}
