import { useState } from "react";

import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";

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
          <GridItem area={"aside"} bg={"gold"}>
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"dodgerblue"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
