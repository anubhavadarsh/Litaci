import { Params, json } from 'react-router-dom';
import { IRepoResponse, repo as repoAPI } from 'services/api/repo';

export const loader = async ({
  request,
  params,
}: {
  request: Request;
  params: Params<string>;
}) => {
  if (params.name) {
    const res = await repoAPI.getRepoDetails(params.name, request.signal);
    const data: IRepoResponse = await res.json();

    if (res.status === 404 || !data.topics.includes('showcase')) {
      throw new Response('not found', { status: 404 });
    }

    return json(data);
  }
};

export const getColor = (seed: string) => {
  const m = new Map([
    ['javascript', '#f1e05a'],
    ['html', '#e34c26'],
    ['scss', '#c6538c'],
    ['css', '#563d7c'],
    ['typescript', '#3178c6'],
    ['c', '#555555'],
    ['c++', '#f34b7d'],
    ['solidity', '#AA6746'],
    ['purebasic', '#5a6986'],
  ]);

  const color = m.get(seed.toLowerCase());

  return color === undefined ? '#c6538c' : color;
};

export const extractContentType = (ct: string | null) => {
  if (Object.is(ct, null)) return null;

  const pattern = /(?<=application\/)([\w.-]+)(?=;)/g;
  const match = pattern.exec(ct);

  return match ? match[1] : null;
};
