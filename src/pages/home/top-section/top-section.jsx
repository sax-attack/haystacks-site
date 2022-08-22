import { Button } from '../../../common';
import { useWindowDimensions } from '../../../hooks';
import { constants } from '../../../constants';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Hero from '../../../assets/HS_Hero.mov'

const HomeTopSection = () => {
  const { width } = useWindowDimensions();

  const isBiggerSm = width > constants.breakpoints.lg;

  return (
    <div className='py-10 h-[80vh] px-14 2xl:px-40 relative md:h-screen'>
      <h1 className='text-3xl font-rubik md:text-5xl max-w-2xl mt-20 md:mt-36 leading-9 md:leading-[62px]'>
        Revolutionary, data-driven market intelligence.
      </h1>
      <h2 className='font-extralight text-sm md:text-2xl max-w-2xl mt-4 md:mt-8 mb-28 md:mb-20 md:leading-[40px] font-light'>
        Haystacks.AI solves data inefficiences in real estate investment.
      </h2>

      {isBiggerSm &&
            <video
             autoplay muted
                  style={{position: 'absolute', left: 0, top: -110, right: 0, zIndex: -1}}
                  src={Hero}
                ></video>
      }

      <Button>
        <AnchorLink href="#demo" className="duration-300 hover:opacity-40">REQUEST A DEMO</AnchorLink>
      </Button>
    </div>
  );
};

export { HomeTopSection };
