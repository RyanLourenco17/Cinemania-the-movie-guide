import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const Card = ({ media}) => {
  const isMovie = media.mediaType === 'movie';

  return (
    <div className={`movie-card ${isMovie ? 'movie' : 'serie'}`}>
      {media.id && (
        <Link to={`/${isMovie ? 'movie' : 'serie'}/${media.id}`} className="details-link">
          <img src={imageUrl + media.poster_path} alt={media.title} />
        </Link>
      )}
    </div>
  );
};

export default Card;