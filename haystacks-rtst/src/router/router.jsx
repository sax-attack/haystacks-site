import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, MarketSolutions, SfrSolutions, People, Published, Page404 } from '../pages';
import { routes } from './routes';
import { MainLayout } from './main-layout';

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export { Router };
