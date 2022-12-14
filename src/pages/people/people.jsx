import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RequestForm } from '../../common';
import { routes } from '../../router';
import { people } from './config';

const foundingHash = `#${people[0].id}`;
const foundingLink = (
  <a href={foundingHash} className='text-base'>
    Founding Team
  </a>
);

const leadershipHash = `#${people[1].id}`;
const leadershipLink = (
  <a href={leadershipHash} className='text-base'>
    Leadership Team
  </a>
);

const advisoryHash = `#${people[2].id}`;
const advisoryLink = (
  <a href={advisoryHash} className='text-base'>
    Advisory Board
  </a>
);

const People = () => {
  useEffect(() => {
    document.title = routes.people.title;
  }, []);

  const location = useLocation();

  return (
    <div>
      <section className='container'>
         <div className="section">
         <h2 className='text-center md:text-left py-40 text-lg md:text-3xl max-w-4xl font-rubik'>
            Haystacks.AI is led by a team of real estate professionals and technologists determined to unlock value for professional
            residential investors.
          </h2>

        <div className='flex row'>
          <aside className='hidden md:block sticky self-start w-1/5 p-3'>
            <ul>
              <li className='mb-5'>{location.hash === foundingHash ? <b>{foundingLink}</b> : foundingLink}</li>
              <li className='mb-5'>{location.hash === leadershipHash ? <b>{leadershipLink}</b> : leadershipLink}</li>
              <li>{location.hash === advisoryHash ? <b>{advisoryLink}</b> : advisoryLink}</li>
            </ul>
          </aside>

          <main className='md:w-4/5'>
            {people.map(({ data, title, id }) => (
              <div key={id}>
                <a id={id} />
                <h3 className='text-center md:text-left text-base md:text-5xl mb-12 font-rubik pt-2'>{title}</h3>

                <div className='my-0 mx-auto md:mx-0 md:w-auto flex flex-wrap'>
                  {data.map((d, index) => (
                      <div key={index} className='w-full sm:w-[46%] md:w-[29%] mx-2 mb-6 md:mb-36 '>
                        <img src={d.image} alt={d.name} className='object-cover w-full' />
                        <p className='text-sm md:text-3xl font-rubik mt-12 mb-3'>{d.name}</p>
                        <p className='text-sm md:text-base mb-3 font-light'>{d.title}</p>
                        <p className='hidden md:block text-sm font-light max-w-[250px]'>{d.description}</p>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </main>
          </div>
         </div>
      </section>

      <RequestForm />
    </div>
  );
};

export { People };
