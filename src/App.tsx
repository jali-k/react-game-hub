import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre;
  platforrm: Platform;
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
          <NavBar></NavBar>
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
          <PlatformSelector
            onPlatformSelect={(selctedPlatform) => {
              setGameQuery({ ...gameQuery, platforrm: selctedPlatform });
            }}
            selectedPlatform={gameQuery.platforrm}
          ></PlatformSelector>
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
