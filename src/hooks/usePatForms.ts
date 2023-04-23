import useData from "./useData";
import { Platform } from "./useGames";

export interface PaltForm {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Platform>("/platforms/lists/parents");
export default useGenres;
