import { Header, Footer } from '../common';

const MainLayout = ({ children }) => {
  return (
    <div className='bg-bg bg-no-repeat bg-cover'>
      <Header />
      <div className={`flex-1 `}>{children}</div>
      <Footer />
    </div>
  );
};

export { MainLayout };
