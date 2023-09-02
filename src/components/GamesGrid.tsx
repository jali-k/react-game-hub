import { Grid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { error, games } = useGames();

  return (
    <Grid>
      <>
        {error && <Text>{error}</Text>}
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </>
    </Grid>
  );
};

export default GamesGrid;
