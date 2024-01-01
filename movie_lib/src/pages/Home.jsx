import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Main from "../components/Main"

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  const getTopRatedMovies = async () => {
    const url = `${import.meta.env.VITE_MOVIE_API}top_rated?${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const moviesWithMediaType = data.results.map(movie => ({ ...movie, mediaType: 'movie' }));
    setTopMovies(moviesWithMediaType);
  };
  
  const getPopularMovies = async () => {
    const url = `${import.meta.env.VITE_MOVIE_API}popular?${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const moviesWithMediaType = data.results.map(movie => ({ ...movie, mediaType: 'movie' }));
    setPopularMovies(moviesWithMediaType);
  };
  
  const getTopRatedSeries = async () => {
    const url = `${import.meta.env.VITE_TV_API}top_rated?${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const seriesWithMediaType = data.results.map(serie => ({ ...serie, mediaType: 'series' }));
    setTopSeries(seriesWithMediaType);
  };
  
  const getPopularSeries = async () => {
    const url = `${import.meta.env.VITE_TV_API}popular?${import.meta.env.VITE_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    const seriesWithMediaType = data.results.map(serie => ({ ...serie, mediaType: 'series' }));
    setPopularSeries(seriesWithMediaType);
  };

  useEffect(() => {
    getTopRatedMovies();
    getPopularMovies();
    getTopRatedSeries();
    getPopularSeries();
  }, []);

  return (
    <div className="container">
      <div className="movies-container">
        <Main />
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && <Carousel items={topMovies} title="Filmes Mais Bem Avaliados" />}
        {popularMovies.length > 0 && <Carousel items={popularMovies} title="Filmes Populares" />}
        {topSeries.length > 0 && <Carousel items={topSeries} title="Séries Mais Bem Avaliadas" />}
        {popularSeries.length > 0 && <Carousel items={popularSeries} title="Séries Populares" />}
      </div>
    </div>
  );
};

export default Home;

