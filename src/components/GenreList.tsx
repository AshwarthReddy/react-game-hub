import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGares, { Genre } from "../hooks/useGenres";
import getCroppedImgaeUrl from "../imageUrlBuilder";

interface Props {
  selectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
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
              <Button
                onClick={() => selectedGenre(genre)}
                fontSize="xl"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
