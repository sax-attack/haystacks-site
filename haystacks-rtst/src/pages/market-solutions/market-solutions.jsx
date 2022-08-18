import { useEffect } from 'react';
import { Card, RequestForm } from '../../common';
import { routes } from '../../router';
import CubeIcon from '../../assets/cube-icon.svg'

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

  return ( 
    <div>
      <section className="section">
        <div className="container">
          <div className="flex flex-col items-center">
            <img src={CubeIcon} alt="cube" className="w-12 h-12 mb-12" />
            <h1 className="font-rubik text-6xl text-center max-w-xl">Lens Predictive Market Intelligence</h1>
            <p className="text-2xl font-light text-center mt-12">Utilizing our proprietary machine learning models, we run multitudes <br /> of regression analyses to surface data points predicting market change.</p>
          </div>

          <div className="flex justify-between mt-24">
            {data.map((item) => (
              <Card key={item.heading} subheading={item.subheading} text={item.text} className="w-2/6 mr-8">
                <Card.Heading>{item.heading}</Card.Heading>
                <Card.Text className="mt-5">{item.text}</Card.Text>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RequestForm />
    </div>
  )
};

export { MarketSolutions };
