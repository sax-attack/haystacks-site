const data = [
  {
    title: 'First Of Its Kind Platform, Made For Your Portfolio',
    subtitle:
      'Haystacks.AI is the only platform that provides micro-market specific predictive intelligence to optimize/prune a portfolio of assets over time.',
  },
  {
    title: 'Customizable, Flexible Assumptions',
    subtitle:
      'Haystacks.AI provides the flexibility to adjust various revenue, expense, and exit assumptions to run the highest impact simulations.',
  },
  {
    title: 'Exclusive Access To Off-Market Trades',
    subtitle:
      'Evaluate and execute trades with other institutions directly through the Haystacks.AI platform. Coming Soon.',
  },
]

export const FeaturesSection = () => (
  <div className="mt-16">
    <div className="flex flex-col md:flex-row justify-around mb-40">
      {data.map(item => (
        <div key={item.title} className="flex flex-col items-center max-w-[270px]">
          <div className="font-roboto font-medium text-4xl md:text-4xl mb-8">{item.title}</div>
          <div className="font-inter font-light text-sm md:text-sm mb-14 md:mb-0">{item.subtitle}</div>
        </div>
      ))}
    </div>

    <p className="font-inter font-light text-2xl text-center px-24">
      Haystacks plugs our clients into deep-rooted property management infrastructure at large fund pricing.
    </p>
  </div>
)
