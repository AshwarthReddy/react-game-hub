import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { Center, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <Center>
      {error && <Text color="red"> {error}</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </Center>
  );
};

export default GameGrid;
