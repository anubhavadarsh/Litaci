import { createBrowserRouter } from 'react-router-dom';

import Root from 'routes/Root';
import HomePage from 'pages/Home';
import ErrorPage from 'pages/Error';
import AboutPage from 'pages/About';
import ProjectPage from 'pages/Project';
import WorkPage from 'pages/Work';
import { loader as projectLoader } from 'pages/Project/util';
import { loader as workLoader } from 'pages/Work/utils';

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
      {
        path: 'project/:name',
        element: <ProjectPage />,
        loader: projectLoader,
      },
      {
        path: 'work/:name',
        element: <WorkPage />,
        loader: workLoader,
      },
    ],
  },
]);
