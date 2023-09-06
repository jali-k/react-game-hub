import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre;
  platforrm: Platform;
  ordering: String;
  searchText: String;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selctedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        padding={2}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText: searchText })
            }
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre: genre });
                console.log(genre);
              }}
              selectedGenre={gameQuery.genre}
            ></GenreList>
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={3}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spacing={3}>
              <PlatformSelector
                onPlatformSelect={(selctedPlatform) => {
                  setGameQuery({ ...gameQuery, platforrm: selctedPlatform });
                }}
                selectedPlatform={gameQuery.platforrm}
              ></PlatformSelector>
              <SortSelector
                onOrderClick={(ordering) => {
                  setGameQuery({ ...gameQuery, ordering: ordering });
                }}
                selectedOrdering={gameQuery.ordering}
              />
            </HStack>
          </Box>

          <GamesGrid
            gameQuery={gameQuery}
            // selectedPlatform={gameQuery.platforrm}
            // selectedGenre={gameQuery.genre}
          ></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
