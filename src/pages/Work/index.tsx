import { useLoaderData } from 'react-router-dom';

import Page from 'containers/Page';
const Work = () => {
  const data = useLoaderData();

  return <Page>{data}</Page>;
};

export default Work;
