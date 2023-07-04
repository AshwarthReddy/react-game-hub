import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameGridSkeliton from "./GameGridSkeliton";
import GameCardSkeliton from "./GameCardContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  let skelitons = Array(12)
    .fill(null)
    .map((_, i) => i);
    if(error) return <Text color="red"> {error}</Text>;
  return (
     
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skelitons.map((i) => (
            <GameCardSkeliton key={i}>
              <GameGridSkeliton />
            </GameCardSkeliton>
          ))}
        {data?.map((game) => (
          <GameCardSkeliton key={game.id}>
            <GameCard game={game} />
          </GameCardSkeliton>
        ))}
      </SimpleGrid>
  );
};

export default GameGrid;
