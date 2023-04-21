import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    let abortController = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: abortController.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => abortController.abort();
  }, []);
  return { games, error };
};

export default useGames;
