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
  genre: Genre | null;
}

const GenreList = ({ genre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGares();
  if (isLoading)
    return <Spinner thickness="4px" speed="0.65s" color="red.500" />;
  if (error) return null;
  return (
    <>
      <List>
        {data?.map((data) => (
          <ListItem paddingY="1" key={data.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImgaeUrl(data.image_background)}
              />
              <Button
                fontWeight={data.id === genre?.id ? "bold" : "normal"}
                onClick={() => selectedGenre(data)}
                fontSize="xl"
                variant="link"
                whiteSpace='normal'
                textAlign='left'
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
