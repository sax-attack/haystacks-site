import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Card } from '../../../common'
import CubeIcon from '../../../assets/cube-icon.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import '../styles.css'

const data = [
  {
    footer:
      'Select the market in the Buy Box with predefined location and property characteristics that meet your portfolio assumptions.',
    content: [
      {
        heading: 'Customize Assumptions',
        text: 'Apply your own financial strategy and efficiently price every micro-market to achieve target returns based on best-in-class rent predictions.',
      },
      {
        heading: 'Data-Driven Locations',
        text: 'Haystacks.AI unites traditional and alternative data layers to highlight data trends matching each custom data thesis.',
      },
      {
        heading: 'Deploy Efficiently',
        text: 'Acquire and maximize value through Haystacks.AI’s local offer & property management partnerships.',
      },
      {
        heading: 'Simulate Hold/Sell',
        text: 'Utilize Haystacks.ai yearly rent projections to understand when markets will appreciate/level off, and craft a strategy to maximize portfolio exits.',
      },
      {
        heading: 'Execute Trades',
        text: 'Eﬃciently execute portfolio trades with other institutions on our platform to take advantage of off-market portfolio opportunities.',
      },
    ],
  },
  {
    footer: 'Simulate 1YR, 3YR and 5YR hold/sell strategies.',
    content: [
      {
        heading: 'Deploy Efficiently',
        text: 'Acquire and maximize value through Haystacks.AI’s local offer & property management partnerships.',
      },
      {
        heading: 'Simulate Hold/Sell',
        text: 'Utilize Haystacks.ai yearly rent projections to understand when markets will appreciate/level off, and craft a strategy to maximize portfolio exits.',
      },
      {
        heading: 'Execute Trades',
        text: 'Eﬃciently execute portfolio trades with other institutions on our platform to take advantage of off-market portfolio opportunities.',
      },
    ],
  },
]

export const PortfolioTabsContent = ({ currentTab }) => (
  <>
    <div className="flex flex-col items-center">
      <p className="text-2xl font-light text-center mt-12">
        Built with an institutional mindset, our platform provides unparalleled speed <br /> and scale in both
        assembling and managing residential portfolios.
      </p>
    </div>

    <div className="flex mt-24 mb-28">
      <Swiper navigation modules={[Navigation]} spaceBetween={50} slidesPerView={3}>
        {data[currentTab].content.map((item, index) => (
          <SwiperSlide key={item.heading} className="story-container">
            <Card key={item.heading} className="h-[430px]">
              <p className="font-roboto font-light text-xl mb-7">0{index + 1}</p>
              <Card.Heading className="font-roboto font-medium w-full mb-20">{item.heading}</Card.Heading>
              <Card.Text className="font-inter font-light">{item.text}</Card.Text>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="flex flex-col items-center px-24 mb-16 text-center">
      <img src={CubeIcon} alt="cube" className="w-12 h-12 mb-4" />
      <p className="text-2xl">{data[currentTab].footer}</p>
    </div>
  </>
)
