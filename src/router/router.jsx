import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home, MarketSolutions, SfrSolutions, People, Published, Page404 } from '../pages';
import { useLayoutEffect } from 'react'
import { routes } from './routes';
import { MainLayout } from './main-layout';


const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children
} 

const Router = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route
            exact
            path={routes.home.url}
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            exact
            path={routes.market.url}
            element={
              <MainLayout>
                <MarketSolutions />
              </MainLayout>
            }
          />
          <Route
            exact
            path={routes.portfolio.url}
            element={
              <MainLayout>
                <SfrSolutions />
              </MainLayout>
            }
          />
          <Route
            exact
            path={routes.people.url}
            element={
              <MainLayout>
                <People />
              </MainLayout>
            }
          />
          <Route
            exact
            path={routes.published.url}
            element={
              <MainLayout>
                <Published />
              </MainLayout>
            }
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export { Router };
