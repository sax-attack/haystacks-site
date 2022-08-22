import { Card } from '../../../common';
import { routes } from '../../../router/routes';

const data = [
  {
    heading: 'Market Analysis',
    subheading: 'Lens',
    text: 'Utilizing hundreds of alternative data points investors can predict market trends, visualize “hot spots” and customize reports to refine underwriting assumptions on the fly.',
    link: routes.market.url,
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
    <div className='py-10 container'>
      <div className=''>
        <h2 className='font-extralight text-sm md:text-2xl mb-3.5 md:mb-12 mx-10 md:mx-2.5 md:mx-2 px-4 sm:px-6'>
          Explore our Solutions Further
        </h2>
        <div className='flex flex-col md:flex-row w-full md:justify-around items-center mb-14 px-4 sm:px-6'>
          {data.map((item) => (
            <Card
              key={item.heading}
              className='w-[300px] md:w-[100%] h-[270px] sm:h-[300px] md:h-[400px] md:max-w-auto mx-2.5 md:mx-2 my-2'
            >
              <Card.Heading>{item.heading}</Card.Heading>
              <Card.Subheading>{item.subheading}</Card.Subheading>
              <Card.Text>{item.text}</Card.Text>
              {item.link ? <Card.RightIcon to={item.link} /> : null}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CardsSection };
