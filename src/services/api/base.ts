const baseURL = import.meta.env.VITE_APP_API_URL;
const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

const get = (url: string, options?: RequestInit | undefined, base?: string) => {
  const ops: RequestInit = {
    headers: {
      Authorization: `token ${token}`,
      'Content-type': 'application/vnd.github.object',
    },
  };

  if (options) {
    if (options.headers) {
      ops.headers = {
        ...ops.headers,
        ...options.headers,
      };
    }

    if (options.signal) {
      ops.signal = options.signal;
    }
  }

  return fetch(`${base || baseURL}${url}`, ops);
};

export { get };
