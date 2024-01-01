import { useState, useEffect, useCallback } from 'react';
import Pagination from '../components/Pagination';
import CardTwo from './CardTwo';

const MediaList = ({ apiEndpoint, title, apiURL, mediaType }) => {
  const [media, setMedia] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);

  const getMedia = useCallback(async () => {
    const url = `${apiURL}${apiEndpoint}?${import.meta.env.VITE_API_KEY}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    setMedia(data.results);
    setTotalPages(data.total_pages);
  }, [apiEndpoint, apiURL, page]);

  useEffect(() => {
    getMedia();
    setSelectedPage(page);
  }, [page, getMedia]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="moviesContainer">
          {media.length > 0 &&
            media.map((item) => <CardTwo className="cardTwo" key={item.id} media={item} mediaType={mediaType}/>)
          }
        </div>
        <Pagination
          totalPages={totalPages}
          page={selectedPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MediaList;