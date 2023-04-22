import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameGridSkeliton from "./GameGridSkeliton";
import GameCardSkeliton from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  let skelitons = Array(12)
    .fill(null)
    .map((_, i) => i);

  return (
    <>
      {error && <Text color="red"> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skelitons.map((i) => (
            <GameCardSkeliton>
              <GameGridSkeliton key={i} />
            </GameCardSkeliton>
          ))}
        {games?.map((game) => (
          <GameCardSkeliton>
            <GameCard key={game.id} game={game} />
          </GameCardSkeliton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
