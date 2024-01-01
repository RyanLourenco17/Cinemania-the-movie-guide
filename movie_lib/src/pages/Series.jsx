import MediaList from '../components/MediaList';

const Series = () => {
  return (
    <MediaList 
      apiEndpoint="popular" 
      title="Séries Populares" 
      apiURL={import.meta.env.VITE_TV_API} 
      mediaType="serie" 
    />
  )
};

export default Series;