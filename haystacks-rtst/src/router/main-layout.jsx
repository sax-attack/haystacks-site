import { Header, Footer } from '../common';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </>
  );
};

export { MainLayout };
