import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const dynamicHeading = `${gameQuery.platforrm?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading as={"h1"}>{dynamicHeading}</Heading>;
};

export default GameHeading;
