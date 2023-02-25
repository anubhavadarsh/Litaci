import { Params, json } from 'react-router-dom';

export const loader = async ({
  request,
  params,
}: {
  request: Request;
  params: Params<string>;
}) => {
  if (params.name) {
    const data = { name: params.name };

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  }
};
