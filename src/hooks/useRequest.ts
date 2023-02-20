import { useState } from 'react';

type Error = {
  message: string;
};

const useRequest = (request: () => Promise<Response>) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const makeRequest = async () => {
    setLoading(true);
    try {
      const response = await request();
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    makeRequest,
  };
};

export default useRequest;
