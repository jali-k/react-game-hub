import {
  Button,
  HStack,
  Hide,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List width={"200px"}>
      {data.map((eachGenre) => (
        <ListItem paddingY={1} key={eachGenre.id}>
          <HStack>
            <Image
              //   overflow={"hidden"}
              width={"35px"}
              height={"35px"}
              borderRadius={3}
              src={eachGenre.image_background}
            ></Image>
            <Button onClick={() => onSelectGenre(eachGenre)} variant={"link"}>
              {eachGenre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
