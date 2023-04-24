import useData from "./useData";
import { Genre } from "./useGenres";
import { PlatForm } from "./usePlatForms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatForm: PlatForm | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatForm?.id } },
    [selectedGenre?.id, selectedPlatForm?.id]
  );

export default useGames;
