import { extractContentType } from 'pages/Project/util';
import { useState } from 'react';

import { repo as repoAPI } from 'services/api/repo';
import { getColor } from './utils';

interface IWorkResponse {
  _links: {
    self: string;
    git: string;
    html: string;
  };
  download_url: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
}

interface ICState {
  name: string;
  color: string;
}

const useGetCompanies = () => {
  const [companies, setCompanies] = useState<ICState[]>([]);

  const makeRequest = async (
    config: { ac: AbortController },
    request: typeof repoAPI.getRepoContent
  ) => {
    try {
      const response = await request('litaci-work', 'work', config.ac.signal);
      const jsonFormat = (await response.json()) as IWorkResponse[];

      const c = [];
      for (const a of jsonFormat) {
        const color = getColor(a.name.substring(0, a.name.length - 3));
        const name = a.name.substring(0, a.name.length - 3);

        c.push({
          name,
          color,
        });
      }

      setCompanies(c);
    } catch (err) {
      console.log(err);
    }
  };

  return { makeRequest, companies };
};

const useGetCompanyDetails = () => {
  const [details, setDetails] = useState('');

  const makeRequest = async (
    config: { ac: AbortController; file: string },
    request: typeof repoAPI.getRepoContent
  ) => {
    try {
      const response = await request(
        'litaci-work',
        `work/${config.file}.md`,
        config.ac.signal
      );
      const ct = response.headers.get('content-type');
      if (ct) {
        const contentType = extractContentType(ct);
        if (contentType === 'json') {
          const jsonFormat = await response.json();
          setDetails(atob(jsonFormat.content));
        } else if (contentType === 'vnd.github.raw') {
          const textFormat = await response.text();
          setDetails(textFormat);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    makeRequest,
    details,
  };
};

export { useGetCompanies, useGetCompanyDetails };
