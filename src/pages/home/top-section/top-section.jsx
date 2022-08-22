import { Button } from '../../../common';
import { useWindowDimensions } from '../../../hooks';
import { constants } from '../../../constants';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Landing from '../../../assets/Landing.mp4'
import { useEffect } from 'react';

const HomeTopSection = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    document.getElementById('vid').play();
  }, [])

  const isBiggerSm = width > constants.breakpoints.lg;

  return (
    <div>
            {isBiggerSm &&
        <video
          id="vid"
          autoPlay muted loop
          style={{position: 'absolute', width: '110%', top: 0, left: 0, right: 0, zIndex: -1}}
          src={Landing}
        ></video>
      }

    <div className='py-10 h-[80vh] px-14 2xl:px-40 relative md:h-screen'>
      <h1 className='text-3xl font-rubik md:text-5xl max-w-2xl mt-20 md:mt-36 leading-9 md:leading-[62px]'>
        Revolutionary, data-driven market intelligence.
      </h1>
      <h2 id="randomElement" className='font-extralight text-sm md:text-2xl max-w-2xl mt-4 md:mt-8 mb-28 md:mb-20 md:leading-[40px] font-light'>
        Haystacks.AI solves data inefficiences in real estate investment.
      </h2>

      
        <AnchorLink href="#demo" className="duration-300 hover:opacity-40"><Button>REQUEST A DEMO</Button></AnchorLink>
      
    </div>
    </div>
  );
};

export { HomeTopSection };
