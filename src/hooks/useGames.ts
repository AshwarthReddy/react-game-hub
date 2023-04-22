import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GamesResponse>("/games", { signal: abortController.signal })
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    //.finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
