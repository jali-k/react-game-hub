import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>aside</GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamesGrid></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
