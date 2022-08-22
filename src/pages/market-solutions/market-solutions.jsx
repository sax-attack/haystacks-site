/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from 'react';
import { Card, RequestForm } from '../../common';
import { routes } from '../../router';
import { useWindowDimensions } from '../../hooks';
import { constants } from '../../constants';
import CubeIcon from '../../assets/cube-icon.svg';
import LensDesktop from '../../assets/HS_Lens.mp4';
import LensMobile from '../../assets/HS_Lens_Mobile.mp4';

const data = [
  {
    heading: 'Unlock the power of alternative data for growth prediction.',
    text: 'Access the best-in-class alternative data repository made up of 350+ alternative datapoints layered with traditional demographic and supply data for 95% of the US.',
  },
  {
    heading: 'Generate high-impact heatmaps for better decision making.',
    text: 'Primary data and proprietary alternative data points are seamlessly integrated on one customizable heat map to create an easy to understand visualization of the markets that best ﬁt your underlying investment thesis.',
  },
  {
    heading: 'Customize micro-market intelligence reports.',
    text: 'Primary data and proprietary alternative data points are seamlessly integrated on one customizable heat map to create an easy to understand visualization of the markets that best ﬁt your underlying investment thesis.',
  },
];

const MarketSolutions = () => {
  useEffect(() => {
    document.title = routes.market.title;
  }, []);

  const { width } = useWindowDimensions();

  const isBiggerSm = width > constants.breakpoints.sm;

  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='flex flex-col items-center'>
            <img src={CubeIcon} alt='cube' className='w-12 h-12 mb-12' />
            <h1 className='font-rubik text-lg md:text-6xl text-center max-w-xl'>Lens Predictive Market Intelligence</h1>
            <p className='text-sm md:text-2xl font-light text-center mt-12'>
              Utilizing our proprietary machine learning models, we run multitudes <br /> of regression analyses to surface data
              points predicting market change.
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-between mt-24'>
            {data.map((item) => (
              <Card
                key={item.heading}
                subheading={item.subheading}
                text={item.text}
                className='w-full md:w-2/6 mb-8 md:mb-0 mr-8'
              >
                <Card.Heading>{item.heading}</Card.Heading>
                <Card.Text className='mt-5'>{item.text}</Card.Text>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className='flex flex-col items-center px-24 pb-8 mt-20 md:pb-16 text-center'>
        <img src={CubeIcon} alt='cube' className='w-12 h-12 mb-4' />
        <p className='text-sm md:text-2xl font-extralight'>
          Customize the intelligent heatmap by weighting the metrics to uncover matching micro-markets.
        </p>
      </div>

      <div className='max-w-[1200px] mx-auto'>
        {isBiggerSm ? (
          <video
            autoPlay
            src={LensDesktop}
            loop
            width='100%'
            height='480'
          ></video>
        ) : (
          <video
            autoPlay
            src={LensMobile}
            loop
            width='100%'
            height='480'
          ></video>
        )}
      </div>

      <RequestForm />
    </div>
  );
};

export { MarketSolutions };
