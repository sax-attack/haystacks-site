import { Card } from '../../../common/card';

const data = [
  {
    heading: 'Market Analysis',
    subheading: 'MI-95',
    text: 'Haystacks.AI enables investors to predict growth metrics, visualize “hot spots” and customize reports to refine underwriting assumptions on the fly.',
  },
  {
    heading: 'SFR Funds',
    subheading: 'Portfolio Architect, Portfolio Simulator',
    text: 'Built with an institutional mindset, Haystacks.AI Portfolio Solutions provide unparalleled speed and scale in assembling, managing and optimizing Single Family Rental portfolios.',
  },
];

const CardsSection = () => {
  return (
    <div className='py-10 md:px-20'>
      <h2 className='text-2xl mb-12'>Explore our Solutions Further</h2>
      <div className='flex md:justify-around'>
        {data.map((item) => (
          <Card key={item.heading} subheading={item.subheading} text={item.text} className='max-w-48 md:max-w-auto mx-2'>
            <Card.Heading>{item.heading}</Card.Heading>
            <Card.Subheading>{item.subheading}</Card.Subheading>
            <Card.Text>{item.text}</Card.Text>
            <Card.RightIcon />
          </Card>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center mt-48 mb-64 md:px-20 text-center'>
        <p className='text-lg md:text-4xl mb-3'>Real estate is a $35T market with glaring inefficiencies.</p>
        <p className='text-xs md:text-2xl'>
          The industry relies on historical metrics, when it should focus on metric forecasts over the future lifespan of the
          investment.
        </p>
      </div>
    </div>
  );
};

export { CardsSection };
