import { useEffect } from 'react';
import { BigText } from '../../common';
import { routes } from '../../router';
import Sourav from '../../assets/Sourav.png';

const foundingTeam = [
  {
    name: 'Sourav Goswami',
    title: 'Sourav Goswami',
    description: '4x Founder, RE PE fund manager, Buckingham Partners MD, former Walton Street MD, Goldman Sachs, Adj. Prof at NYU Schack Inst. for RE, nominated for Smithsonian Award, Harvard BA, Columbia MBA',
    image: Sourav
  },
  {
    name: 'Sourav Goswami',
    title: 'Sourav Goswami',
    description: '4x Founder, RE PE fund manager, Buckingham Partners MD, former Walton Street MD, Goldman Sachs, Adj. Prof at NYU Schack Inst. for RE, nominated for Smithsonian Award, Harvard BA, Columbia MBA',
    image: Sourav
  },
  {
    name: 'Sourav Goswami',
    title: 'Sourav Goswami',
    description: '4x Founder, RE PE fund manager, Buckingham Partners MD, former Walton Street MD, Goldman Sachs, Adj. Prof at NYU Schack Inst. for RE, nominated for Smithsonian Award, Harvard BA, Columbia MBA',
    image: Sourav
  },
  {
    name: 'Sourav Goswami',
    title: 'Sourav Goswami',
    description: '4x Founder, RE PE fund manager, Buckingham Partners MD, former Walton Street MD, Goldman Sachs, Adj. Prof at NYU Schack Inst. for RE, nominated for Smithsonian Award, Harvard BA, Columbia MBA',
    image: Sourav
  },
  {
    name: 'Sourav Goswami',
    title: 'Sourav Goswami',
    description: '4x Founder, RE PE fund manager, Buckingham Partners MD, former Walton Street MD, Goldman Sachs, Adj. Prof at NYU Schack Inst. for RE, nominated for Smithsonian Award, Harvard BA, Columbia MBA',
    image: Sourav
  },
]

const People = () => {
  useEffect(() => {
    document.title = routes.people.title;
  }, []);

  return (
    <section className='container'>
      <BigText paragraphClassName="text-left">
        Haystacks is led by a team of real estate professionals and technologists determined to unlock value for professional residential investors.
      </BigText>

      <div className='flex row'>
        <aside className='w-1/5'>
          <ul>
            <li className="mb-5"><a href="#" className="text-lg">Founding Team</a></li>
            <li className="mb-5"><a href="#" className="text-lg">Leadership Team</a></li>
            <li><a href="#" className="text-lg">Advisory Board</a></li>
          </ul>
        </aside>

        <main className='w-4/5'>
          {/* <h3>Founding Team</h3> */}

          <div className="flex flex-wrap">
            {foundingTeam.map((member, index) => (
              <div key={index} className="w-1/3 mb-52">
                <img src={member.image} alt={member.name} />
                <p className="text-3xl mt-12 mb-5">{member.name}</p>
                <p className="text-base mb-5">{member.title}</p>
                <p className="text-base text-sm" style={{maxWidth: '250px'}}>{member.description}</p>
              </div>
            ))}
          </div>

          {/* <h3>Leadership Team</h3>

          <div>
            TEAM
          </div>

          <h3>Advisory Board</h3>

          <div>
            TEAM
          </div> */}
        </main>
      </div>
    </section>
  )
};

export { People };
