import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <ul>
      {data.map((eachData) => (
        <li key={eachData.id}>{eachData.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
