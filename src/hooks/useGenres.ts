import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [ganres, setGenres] = useState<Genre[]>();
  const [error, setError] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: abortController.signal })
      .then((response) => {
        setGenres(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, []);
  return { ganres, error, isLoading };
};

export default useGenres;
