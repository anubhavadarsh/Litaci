import { Params, json } from 'react-router-dom';
import { IRepoResponse, Repos } from 'services/api/Repos';

export const loader = async ({
  request,
  params,
}: {
  request: Request;
  params: Params<string>;
}) => {
  if (params.projectName) {
    const res = await Repos.single(params.projectName, request.signal);
    const data: IRepoResponse = await res.json();

    if (res.status === 404 || !data.topics.includes('showcase')) {
      throw new Response('not found', { status: 404 });
    }

    return json(data);
  }
};
