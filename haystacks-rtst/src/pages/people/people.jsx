import { useEffect } from 'react';
import { routes } from '../../router';
import { people } from './config';

const People = () => {
  useEffect(() => {
    document.title = routes.people.title;
  }, []);

  return (
    <section className="container">
      <div className="px-24">
      <h2 className="text-left py-40 text-3xl max-w-4xl">
        Haystacks is led by a team of real estate professionals and 
        technologists determined to unlock value for professional residential investors.
      </h2>
      </div>
      <div className="flex row">
        <aside className='w-1/5'>
          <ul>
            <li className="mb-5"><a href="#" className="text-base">Founding Team</a></li>
            <li className="mb-5"><a href="#" className="text-base">Leadership Team</a></li>
            <li><a href="#" className="text-base">Advisory Board</a></li>
          </ul>
        </aside>

        <main className="w-4/5">
            {people.map(({ data, title }, index) => (
              <div>
                <h3 className="text-4xl mb-12 font-inter">{title}</h3>

                <div className="flex flex-wrap">
                  {data.map(d => (
                    <div key={index} className="w-1/3 mb-36">
                      <img src={d.image} alt={d.name} />
                      <p className="text-3xl mt-12 mb-3">{d.name}</p>
                      <p className="text-base mb-3 font-light">{d.title}</p>
                      <p className="text-base text-sm font-inter font-light" style={{ maxWidth: "250px" }}>{d.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </main>
      </div>
    </section>
  )
};

export { People };
