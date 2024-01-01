import { CaretRight, CaretLeft } from "react-bootstrap-icons";
import './Pagination.css'

const Pagination = ({ totalPages, page, onPageChange }) => {
    const totalVisiblePages = 10;
    const half = Math.floor(totalVisiblePages / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, start + totalVisiblePages - 1);

    if (end - start < totalVisiblePages - 1) {
        start = Math.max(1, end - totalVisiblePages + 1);
    }

    const visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const nextPage = () => {
        onPageChange(page < totalPages ? page + 1 : page);
    };

    const prevPage = () => {
        onPageChange(page > 1 ? page - 1 : 1);
    };

  return (
    <div className='navPage'>
      <button onClick={prevPage}><CaretLeft/></button>
      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === page ? 'selected' : ''}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={nextPage}><CaretRight/></button>
    </div>
  );
};

export default Pagination;