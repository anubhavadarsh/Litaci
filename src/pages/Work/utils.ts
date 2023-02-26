import { parse } from 'yaml';

import { Params } from 'react-router-dom';
import { repo as repoAPI } from 'services/api/repo';
import { extractContentType } from 'pages/Project/util';

const REGEX = /^---\n([\s\S]*?)\n---\n([\s\S]*)/;

export type metadataType = {
  accent: string;
  role: string;
  highlights: string[];
};

export const loader = async ({
  request,
  params,
}: {
  request: Request;
  params: Params<string>;
}) => {
  if (params.name) {
    try {
      const response = await repoAPI.getRepoContent(
        'litaci-work',
        `work/${params.name}.md`,
        request.signal
      );

      if (response.status === 404) {
        throw new Error('not found');
      }

      const { headers } = response;
      const contentType = extractContentType(headers.get('content-type'));

      let md = '';
      switch (contentType) {
        case 'json': {
          const jsonFormat = await response.json();
          md = atob(jsonFormat.content);
          break;
        }
        case 'vnd.github.raw': {
          const textFormat = await response.text();
          md = textFormat;
          break;
        }
        default: {
          throw new Error('unkown content type');
        }
      }

      const match = md.match(REGEX);

      if (Object.is(match, null))
        return {
          name: params.name,
        };

      const metadata = parse(match![1]) as metadataType;
      const contentData = match![2];

      return {
        ...metadata,
        name: params.name,
        content: contentData,
      };
    } catch (err) {
      console.log(err);
      throw new Response(err.message, { status: 404 });
    }
  }
};

export const getColor = (name: string) => {
  const m = new Map([
    ['bright-money', '#16c75d'],
    ['merakii', '#f6971b'],
    ['innovatyv', '#4d79be'],
    ['neon-sundae', '#e16cfc'],
  ]);

  return m.get(name) ?? '#f69d71';
};
