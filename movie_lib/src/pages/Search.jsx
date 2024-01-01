import React, { useState, useEffect, useCallback } from 'react';
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";
import '../pages/SearchGrid.css'
import Pagination from '../components/Pagination';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);

  const query = searchParams.get("q");

  const getSearchResults = useCallback(async () => {
    const searchURL = import.meta.env.VITE_SEARCH;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `${searchURL}?${apiKey}&query=${query}&page=${page}`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    const moviesWithType = data.results.map(movie => ({ ...movie, mediaType: 'movie' }));
    setMovies(moviesWithType);
    setTotalPages(data.total_pages);
  }, [query, page]);

  useEffect(() => {
    getSearchResults();
    setSelectedPage(page);
  }, [page, getSearchResults]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="moviesContainer">
        {movies.length > 0 &&
          movies.map((movie) => <Card key={movie.id} media={movie} />)
        }
      </div>
      <Pagination
        totalPages={totalPages}
        page={selectedPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Search;