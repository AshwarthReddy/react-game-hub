import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface GenreResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      let abortController = new AbortController();
      setIsLoading(true);
      apiClient
        .get<GenreResponse<T>>(endPoint, {
          signal: abortController.signal,
          ...requestConfig,
        })
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
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
