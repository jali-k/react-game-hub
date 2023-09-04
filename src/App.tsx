import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";

function App() {
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
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamesGrid></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
