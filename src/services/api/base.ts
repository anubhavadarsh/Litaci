const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

const get = (url: string, { headers, signal }: RequestInit = {}) => {
  const option: RequestInit = {
    headers: {
      Authorization: `token ${token}`,
      'Content-type': 'application/vnd.github.object',
      ...headers,
    },
    signal,
  };

  return fetch(url, option);
};

export { get };
