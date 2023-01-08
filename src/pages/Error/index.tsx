import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError();

  return (
    <div id='error-page'>
      <h1>Something went wrong</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
