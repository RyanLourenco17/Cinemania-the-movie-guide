import MediaList from '../components/MediaList';

const Movies = () => {
  return (
    <MediaList 
      apiEndpoint="top_rated" 
      title="Filmes Populares" 
      apiURL={import.meta.env.VITE_MOVIE_API} 
      mediaType="movie" 
    />
  )
};

export default Movies;

