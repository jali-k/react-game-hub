import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selctedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
                setSelectedGenre(genre);
                console.log(genre);
              }}
              selectedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            onPlatformSelect={(selctedPlatform) => {
              setSelectedPlatform(selctedPlatform);
            }}
            selectedPlatform={selctedPlatform}
          ></PlatformSelector>
          <GamesGrid
            selectedPlatform={selctedPlatform}
            selectedGenre={selectedGenre}
          ></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
