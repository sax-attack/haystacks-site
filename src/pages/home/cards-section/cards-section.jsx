import { Card } from '../../../common';
import { routes } from '../../../router/routes';

const data = [
  {
    heading: 'Market Analysis',
    subheading: 'Lens',
    text: 'Utilizing hundreds of alternative data points investors can predict market trends, visualize “hot spots” and customize reports to refine underwriting assumptions on the fly.',
  },
  {
    heading: 'SFR Funds',
    subheading: 'Portfolio Architect, Portfolio Simulator',
    text: 'Built with an institutional mindset, Haystacks.AI Portfolio Solutions provide unparalleled speed and scale in assembling, managing and optimizing Single Family Rental portfolios.',
    link: routes.portfolio.url,
  },
];

const CardsSection = () => {
  return (
    <div className='py-10 md:px-12'>
      <h2 className='font-extralight text-sm md:text-2xl mb-3.5 md:mb-12 mx-2.5 md:mx-2 px-4 sm:px-6'>
        Explore our Solutions Further
      </h2>
      <div className='flex w-full md:justify-around w-fit mb-14 px-4 sm:px-6 overflow-x-scroll md:overflow-x-hidden overflow-y-hidden'>
        {data.map((item) => (
          <Card
            key={item.heading}
            className='w-[198px] sm:w-[300px] md:w-[100%] h-[270px] sm:h-[300px] md:h-[400px] md:max-w-auto mx-2.5 md:mx-2 '
          >
            <Card.Heading>{item.heading}</Card.Heading>
            <Card.Subheading>{item.subheading}</Card.Subheading>
            <Card.Text>{item.text}</Card.Text>
            {item.link ? <Card.RightIcon to={item.link} /> : null}
          </Card>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center pt-20 md:pt-48 pb-16 md:pb-64 px-8 md:px-20 text-center md:bg-transparent bg-background-gray200 '>
        <p className='text-lg md:text-4xl mb-4'>Real estate is a $35T market with glaring inefficiencies.</p>
        <p className='font-extralight text-sm md:text-2xl max-w-[900px]'>
          The industry relies on historical metrics, when it should focus on metric forecasts over the future lifespan of the
          investment.
        </p>
      </div>
    </div>
  );
};

export { CardsSection };
