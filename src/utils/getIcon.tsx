import { ReactNode } from 'react';

import { ReactComponent as Linkedin } from 'assets/icons/icons8-linkedin.svg';
import { ReactComponent as Github } from 'assets/icons/icons8-github.svg';
import { ReactComponent as Medium } from 'assets/icons/icons8-medium.svg';
import { ReactComponent as Twitter } from 'assets/icons/icons8-twitter.svg';

const dimension = {
  width: '100%',
  height: '100%',
};

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return <Linkedin {...dimension} />;
    case 'twitter':
      return <Twitter {...dimension} />;
    case 'medium':
      return <Medium {...dimension} />;
    case 'github':
      return <Github {...dimension} />;
  }
};

export default getIcon;
