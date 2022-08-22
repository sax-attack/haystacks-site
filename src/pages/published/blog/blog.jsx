import React from 'react';
import { BlogPost } from '../../../common';

const posts = [
  {
    title: 'IT startup Electric reaches unicorn status and other NYC tech news',
    date: 'March 30, 2022',
    link: 'https://www.bizjournals.com/newyork/news/2022/03/30/it-startup-electric-and-other-nyc-tech-news.html'
  },
  {
    title: 'Future City: Smart home combo',
    date: 'March 29, 2022',
    link: 'https://therealdeal.com/2022/03/29/future-city-smart-home-combo/'
  },
  {
    title: '#NYCtech Week in Review: 3/20/22 – 3/27/22',
    date: 'March 27, 2022',
    link: 'https://www.alleywatch.com/2022/03/nyctech-week-in-review-3-20-22-3-27-22/'
  },
  {
    title: 'The Pulse of New York Tech',
    date: 'March 24, 2022',
  },
  {
    title: 'Haystacks.AI Raises Another $3M for its Single-Family Rental Real Estate Data Platform That Helps Investors Source, Acquire, and Manage Their Investments',
    date: 'March 24, 2022',
    link: 'https://www.alleywatch.com/2022/03/haystacks-ai-single-family-rental-residential-real-estate-data-platform-management-sourcing-sourav-goswami/'
  },
  {
    title: 'Haystacks.AI Maintains Strong Momentum for 2022 With Additional Funding, Accelerated Growth',
    link: 'https://rew-online.com/haystacks-ai-maintains-strong-momentum-for-2022-with-additional-funding-accelerated-growth/',
    date: 'March 24, 2022',
  },
  {
    title: 'Venture Capital Deals',
    link: 'https://www.axios.com/newsletters/axios-pro-rata/',
    date: 'August 20, 2022'
  },
  {
    title: 'Katie Haun lands $1.5B for two crypto funds in historic raise for solo VC',
    link: 'https://fortune.com/2022/03/23/katie-haun-lands-historic-raise-crypto-funds-solo-vc/',
    date: 'March 23, 2022'
  },
  {
    title: 'Haystacks.AI Raises Additional $3M in Seed Funding',
    link: 'https://www.finsmes.com/2022/03/haystacks-ai-raises-additional-3m-in-seed-funding.html',
    date: 'March 23, 2022'
  },
  {
    title: 'Haystacks.AI pulls in $3m seed',
    link: 'https://www.venturecapitaljournal.com/haystacks-ai-pulls-in-3m-seed/',
    date: 'March 22, 2022'
  },
  {
    title: 'The AlleyWatch Startup Daily Funding Report: 3/22/2022',
    link: 'https://www.alleywatch.com/2022/03/the-alleywatch-startup-daily-funding-report-3-22-2022/',
    date: 'March 22, 2022'
  },
  {
    title: 'Haystacks.AI Maintains Strong Momentum for 2022 With Additional Funding, Accelerated Growth',
    link: 'https://martechseries.com/predictive-ai/ai-platforms-machine-learning/haystacks-ai-maintains-strong-momentum-for-2022-with-additional-funding-accelerated-growth/',
    date: 'March 22, 2022'
  },
  {
    title: 'New data platform finds hot housing markets while they’re still just warm',
    link: 'https://therealdeal.com/2021/12/21/new-data-platform-finds-hot-housing-markets-while-theyre-still-just-warm/',
    date: 'December 21, 2021'
  },
  {
    title: '#NYCtech Week in Review: 12/12/21 – 12/18/21',
    link: 'https://www.alleywatch.com/2021/12/nyctech-week-in-review-12-12-21-12-18-21/',
    date: 'December 21, 2021'
  },
  {
    title: 'Haystacks.AI Secures $5 Million In Seed Fund0ing Led by Streamlined Ventures and Colle Capital',
    link: 'https://www.americanentrepreneurship.com/press-releases/haystacks-ai-secures-5-million-in-seed-funding-led-by-streamlined-ventures-and-colle-capital.html',
    date: 'December 17, 2021'
  },
  {
    title: 'Haystacks.AI Secured $5M In Seed Funding',
    link: 'https://vcnewsdaily.com/haystacks.ai/venture-capital-funding/gmfnxhtdkv',
    date: 'December 17, 2021'
  },
  {
    title: 'Haystacks.AI picks up $5m seed',
    link: 'https://www.venturecapitaljournal.com/haystacks-ai-picks-up-5m-seed/',
    date: 'December 16, 2021'
  },
  {
    title: 'The AlleyWatch Startup Daily Funding Report',
    link: 'https://www.alleywatch.com/2021/12/the-alleywatch-startup-daily-funding-report-12-16-2021/',
    date: 'December 16, 2021'
  }
];

const Blog = () => {
  return (
    <section className='container'>
      <div className="section">
        <div className='px-24'>
          <h2 className='text-center font-rubik md:text-left py-16 md:py-40 text-lg md:text-3xl max-w-4xl'>Featured Publications</h2>
        </div>

        <div className='flex flex-col md:flex-row justify-between flex-wrap'>
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              link={post.link}
              date={post.date}
              className='md:w-[47%]'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };
