import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { CanceledError } from "axios";

interface GenreResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GenreResponse<T>>(endPoint, { signal: abortController.signal })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => abortController.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
