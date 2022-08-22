const data = [
  {
    num: '800+',
    description: 'public and private data points ingested and curated in Haystacks Data Lake',
  },
  {
    num: '20+',
    description: 'proprietary (lens) signals for gaining 360 perspective of neighborhood or market',
  },
  {
    num: '90%',
    description: 'Accuracy - Industry leading rent forecasting with ~10% error thanks to alternative data',
  },
];

const NumbersSection = () => {
  return (
    <div className='px-5 md:px-20 py-10 md:py-40 bg-sectionBg bg-no-repeat bg-cover'>
      <div className='flex flex-col justify-center items-center pb-16 md:pb-40 px-8 md:px-20 text-center'>
        <p className='text-lg md:text-4xl mb-4'>Real estate is a $35T market with glaring inefficiencies.</p>
        <p className='font-extralight text-sm md:text-2xl max-w-[900px]'>
          The industry relies on historical metrics, when it should focus on metric forecasts over the future lifespan of the
          investment.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-around items-center'>
        {data.map((item) => (
          <div key={item.num} className='flex flex-col items-center text-center max-w-[270px]'>
            <div className='text-6xl md:text-8xl mb-2'>{item.num}</div>
            <div className='text-sm md:text-lg mb-14 md:mb-0 md:w-[200px] lg:w-[300px] font-extralight'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NumbersSection };
