import useGares from "../hooks/useGenres";

const GenreList = () => {
  const { ganres } = useGares();
  return (
    <>
      <ul>
        {ganres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GenreList;
