import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGares from "../hooks/useGenres";
import getCroppedImgaeUrl from "../imageUrlBuilder";

const GenreList = () => {
  const { data, error, isLoading } = useGares();
  if (isLoading)
    return <Spinner thickness="4px" speed="0.65s" color="red.500" />;
  if (error) return null;
  return (
    <>
      <List>
        {data?.map((genre) => (
          <ListItem paddingY="1" key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImgaeUrl(genre.image_background)}
              />
              <Text fontSize="xl">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
