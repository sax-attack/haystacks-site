import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Card } from '../../../common';
import { useWindowDimensions } from '../../../hooks';
import { constants } from '../../../constants';
import CubeIcon from '../../../assets/cube-icon.svg';
import PortfolioArchitectDesktopVideo from '../../../assets/HS_Architect.mp4';
import PortfolioArchitectMobileVideo from '../../../assets/Architect_Mobile.mov';
import PortfolioSimulatorDesktopVideo from '../../../assets/HS_Simulator.mp4';
import PortfolioSimulatorMobileVideo from '../../../assets/Simulator_Mobile.mp4';

import 'swiper/css';
import 'swiper/css/navigation';
import '../styles.css';

const data = [
  {
    heading: 'Portfolio Architect',
    footer:
      'Select micro-markets to create your Buy Box based on location and property characteristics that meet your portfolio assumptions.',
    desktopVideo: PortfolioArchitectDesktopVideo,
    mobileVideo: PortfolioArchitectMobileVideo,
    content: [
      {
        heading: 'Customize Assumptions',
        index: '01',
        text: 'Apply your own financial strategy and efficiently price every micro-market to achieve target returns based on best-in-class rent predictions.',
      },
      {
        heading: 'Data-Driven Locations',
        index: '02',
        text: 'Haystacks.AI unites traditional and alternative data layers to highlight data trends matching each custom data thesis.',
      },
      {
        heading: 'Deploy Efficiently',
        index: '03',
        text: 'Acquire and maximize value through Haystacks.AI’s local offer & property management partnerships.',
      },
      // {
      //   heading: 'Simulate Hold/Sell',
      //   text: 'Utilize Haystacks.ai yearly rent projections to understand when markets will appreciate/level off, and craft a strategy to maximize portfolio exits.',
      // },
      // {
      //   heading: 'Execute Trades',
      //   text: 'Eﬃciently execute portfolio trades with other institutions on our platform to take advantage of off-market portfolio opportunities.',
      // },
    ],
  },
  {
    heading: 'Portfolio Simulator',
    footer: 'Simulate 1YR, 3YR and 5YR hold/sell strategies.',
    desktopVideo: PortfolioSimulatorDesktopVideo,
    mobileVideo: PortfolioSimulatorMobileVideo,
    content: [
      {
        heading: 'Deploy Efficiently',
        text: 'Acquire and maximize value through Haystacks.AI’s local offer & property management partnerships.',
        isGrayedOut: true,
        index: '03',
      },
      {
        heading: 'Simulate Hold/Sell',
        text: 'Utilize Haystacks.AI yearly rent projections to understand when markets will appreciate/level off, and craft a strategy to maximize portfolio exits.',
        index: '04',
      },
      {
        heading: 'Execute Trades',
        text: 'Efficiently execute portfolio trades with other institutions on our platform to take advantage of off-market portfolio opportunities.',
        index: '05',
      },
    ],
  },
];

export const PortfolioTabsContent = ({ currentTab }) => {
  const { width } = useWindowDimensions();

  const isBiggerSm = width > constants.breakpoints.sm;
  return (
    <>
      <div className='flex flex-col items-center'>
        {isBiggerSm ? null : (
          <>
            <img className='w-9' src={CubeIcon} alt='SolutionsLogo' />

            <p className='text-3xl'>{data[currentTab].heading}</p>
          </>
        )}
        <p className='text-sm md:text-2xl font-extralight text-center mt-4 md:mt-12 max-w-[70%] md:max-w-full'>
          Built with an institutional mindset, our platform provides unparalleled speed <br /> and scale in both assembling and
          managing residential portfolios.
        </p>
      </div>

      <div className='flex flex-col items-center md:flex-row mt-24 mb-28'>
        {isBiggerSm ? (
          <Swiper navigation modules={[Navigation]} spaceBetween={32} slidesPerView={3}>
            {data[currentTab].content.map((item) => (
              <SwiperSlide key={item.heading} className='story-container'>
                <Card key={item.heading} className='h-[430px]' style={item.isGrayedOut && { opacity: 0.5 }}>
                  <p className='font-roboto font-light text-xl mb-7'>{item.index}</p>
                  <Card.Heading className='font-roboto font-medium w-full h-28'>{item.heading}</Card.Heading>
                  <Card.Text className='font-inter font-light'>{item.text}</Card.Text>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            {data[currentTab].content.map((item) => (
              <div className='px-14'>
                <h5 className='font-roboto text-center font-light text-lg mb-1'>
                  {item.index} {item.heading}
                </h5>
                <p className='font-extralight text-sm text-center mb-10'>{item.text}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className='flex flex-col items-center px-24 pb-8 md:pb-16 text-center'>
        <img src={CubeIcon} alt='cube' className='w-12 h-12 mb-4' />
        <p className='text-sm md:text-2xl font-extralight'>{data[currentTab].footer}</p>
      </div>

      <div>
        <video
          autoPlay
          loop
          type='video/mov'
          src={isBiggerSm ? data[currentTab].desktopVideo : data[currentTab].mobileVideo}
        ></video>
      </div>
    </>
  );
};
