import { useRoutes } from 'react-router-dom';

import MainPage from './components/views/MainPage/MainPage';
import OffertView from './components/pages/OffertView/OffertView';
import NotFound from './components/views/NotFound/NotFound';
import './styles/global.scss';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: '/shelfstairs',
      element: <OffertView/>
    },
    {
      path: '/loftfurniture',
      element: <OffertView/>
    },
    {
      path: '/selfmontage',
      element: <OffertView/>
    },
    {
      path: '/weldingservice',
      element: <OffertView/>
    },
    {
      path: '/contact',
      element: <OffertView/>
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]);
  
  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
