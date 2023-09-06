import {
  Button,
  HStack,
  Heading,
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
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();

  if (error) return;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading marginY={3} fontSize={"2xl"}>
        Genre
      </Heading>
      <List width={"200px"}>
        {data.map((eachGenre) => (
          <ListItem paddingY={1} key={eachGenre.id}>
            <HStack>
              <Image
                //   overflow={"hidden"}
                boxSize={"35px"}
                objectFit={"cover"}
                borderRadius={3}
                src={eachGenre.image_background}
              ></Image>
              <Button
                fontWeight={
                  eachGenre.id == selectedGenre?.id ? "bold" : "normal"
                }
                onClick={() => onSelectGenre(eachGenre)}
                variant={"link"}
              >
                {eachGenre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
