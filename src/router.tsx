import { createBrowserRouter } from 'react-router-dom';

import Root from 'routes/Root';
import HomePage from 'pages/Home';
import ErrorPage from 'pages/Error';
import AboutPage from 'pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
