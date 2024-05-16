import { createBrowserRouter, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home';
import SampleSurvey from './components/SampleSurvey/SampleSurvey';
import SensorySurvey from './components/SensorySurvey/SensorySurvey';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sample',
        element: <SampleSurvey />
      },
      {
        path: '/sensory',
        element: <SensorySurvey />
      }
    ]
  }
]);

function Layout() {
  return(
  <div className='app'>
    <nav className='navigation'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/sample'>Sample Survey</NavLink>
      <NavLink to='/sensory'>Sensory Preferences Survey</NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
  );
}


function App() {
  return(
      <RouterProvider router={router} />
  );
}

export default App;
