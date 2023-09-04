import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  if (error) return;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List width={"200px"}>
      {data.map((eachData) => (
        <ListItem paddingY={1} key={eachData.id}>
          <HStack>
            <Image
              width={"32px"}
              borderRadius={3}
              src={eachData.image_background}
            ></Image>
            <Text>{eachData.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
