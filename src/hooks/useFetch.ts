import { useState, useEffect } from "react";
import axios from "axios";

function useAxios<T>(url: string, params: object = {}) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params,
        });
        setData(response.data as T);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params, url]);

  return { data, loading, error };
}

export default useAxios;
