import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CarouselCast from "../components/CarouselCast";
import Card from "../components/Card";
import './MovieDetails.css'

const movieApiURL = import.meta.env.VITE_MOVIE_API;
const tvApiURL = import.meta.env.VITE_TV_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const MovieDetails = () => {
  const {id, type} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const getMovie = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data);
  }

  const getCast = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setCast(data.cast.slice(0, 10)); // Limita a exibição a 10 membros do elenco
  };

  const getCrew = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    const specificCrewMembers = [data.crew[0], data.crew[3], data.crew[16]].filter(Boolean);
    setCrew(specificCrewMembers);
  };

  useEffect(() => {
    const isMovie = type === 'movie';
    const baseUrl = isMovie ? movieApiURL : tvApiURL;
    const withMovieOrSerie_Url = `${baseUrl}${id}?${apiKey}`;
    const castUrl = `${baseUrl}${id}/credits?${apiKey}`;
    const crewUrl = `${baseUrl}${id}/credits?${apiKey}`;


    getMovie(withMovieOrSerie_Url);
    getCast(castUrl);
    getCrew(crewUrl);
  }, [id, movieApiURL, tvApiURL]);
  
  return (
    <div className="movie-page">
      {movie && (
        <>
         <div className="about">
            <img className="backgroundPoster" src={imageUrl + movie.backdrop_path} alt="" />
            <Card media={movie}  />
            <div className="details">
              <h2>{movie.title}</h2>
              <h2>{movie.name}</h2>
              <ul>
                <li>
                  <p>Data de lançamento:
                    {movie.release_date} 
                    {movie.first_air_date}
                  </p>
                </li>
                <li><p>Duração: {movie.runtime} minutos</p></li>
                <li><span>Gênero: {movie.genres.map((genre) => genre.name).join(", ")}</span></li>
              </ul>
              <div className="info">
                <div className="average">
                  <div className="circleAverage">
                    <p>{(movie.vote_average * 10).toFixed(0)}%</p>
                  </div>
                  <p>Avaliação dos usuários</p>
                </div>
                <div className="overview">
                  <h3>Sinopse</h3>
                  <p>{movie.overview}</p>
                </div>
              </div>
              <div className="crew">
                <ul>
                  {crew.map((member) => (
                    <li key={member.id}>
                      <p>{member.name}</p>
                      <span>{member.department}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="cast">
            <h2>Elenco</h2>
            <CarouselCast cast={cast} /> 
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetails