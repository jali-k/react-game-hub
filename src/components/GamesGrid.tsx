import { Grid, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeliton from "./GameCardSkeliton";

const GamesGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Grid>
      <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
          {isLoading
            ? skeletons.map((skeleton) => <GameCardSkeliton></GameCardSkeliton>)
            : games.map((game) => <GameCard game={game}></GameCard>)}
        </SimpleGrid>
      </>
    </Grid>
  );
};

export default GamesGrid;
