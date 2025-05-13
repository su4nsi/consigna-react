import { useEffect } from "react";
import { usePaginationLogic } from "./usePaginationLogic";
const Pagination = ({ index, setIndex, total }) => {
  const {
    handleFirstPage,
    handleLastPage,
    handleNextPage,
    handlePreviousPage,
    handlePage,
  } = usePaginationLogic(total);
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => setIndex(handleFirstPage())}
        disabled={index === total - 1}
      >
        First
      </button>
      <button
        className="pagination-button"
        onClick={() => setIndex(handlePreviousPage(index))}
        disabled={index === 0}
      >
        Previous
      </button>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          className={`pagination-button ${index === i ? "active" : ""}`}
          onClick={() => setIndex(handlePage(i))}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => setIndex(handleNextPage(index))}
        disabled={index === total - 1}
      >
        Next
      </button>
      <button
        className="pagination-button"
        onClick={() => setIndex(handleLastPage())}
        disabled={index === total - 1}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
