import { Button } from '../../../common';
import { useWindowDimensions } from '../../../hooks';
import { constants } from '../../../constants';
import HomeBgGeometry from '../../../assets/home-geometry.svg';

const HomeTopSection = () => {
  const { width } = useWindowDimensions();

  const isBiggerSm = width > constants.breakpoints.sm;

  return (
    <div className='py-10 h-[80vh] px-14 2xl:px-40 relative md:h-screen'>
      {isBiggerSm ? (
        <img src={HomeBgGeometry} alt='geometry background' className='absolute top-0 left-0 right-0 h-screen w-full' />
      ) : null}
      <h1 className='text-3xl md:text-5xl max-w-2xl mt-20 md:mt-36 leading-9 md:leading-[62px] font-light'>
        Revolutionary predictive market analysis.
      </h1>
      <h2 className='font-extralight text-sm md:text-2xl max-w-2xl mt-4 md:mt-8 mb-28 md:mb-20 md:leading-[40px] font-light'>
        Haystacks.AI solves data inefficiences in real estate investment.
      </h2>
      <Button>Request a demo</Button>
    </div>
  );
};

export { HomeTopSection };
