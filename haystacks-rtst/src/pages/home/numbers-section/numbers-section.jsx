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
    <div className='p-20 md:bg-background-accent'>
      <div className='flex flex-col md:flex-row justify-around items-center'>
        {data.map((item) => (
          <div key={item.num} className='flex flex-col items-center text-center max-w-[270px]'>
            <div className='text-6xl md:text-8xl mb-2'>{item.num}</div>
            <div className='text-xs md:text-lg mb-14 md:mb-0'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NumbersSection };
