import { FC } from 'react';

import Home from 'pages/Home';
import { ThemeProvider } from 'context/theme-context';

const App: FC = () => {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
