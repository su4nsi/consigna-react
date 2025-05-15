import "./Pagination.css";
import { usePaginationLogic } from "./usePaginationLogic";

const Pagination = ({ index, setIndex, total }) => {
  const {
    handleFirstPage,
    handleLastPage,
    handleNextPage,
    handlePreviousPage,
    handlePage,
    getVisibleIndexes,
    getNumberOfPages,
  } = usePaginationLogic(total);

  const visibleIndexes = getVisibleIndexes(index, getNumberOfPages());

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => setIndex(handleFirstPage())}
        disabled={index === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pagination-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="pagination-button"
        onClick={() => setIndex(handlePreviousPage(index))}
        disabled={index === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pagination-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {visibleIndexes.map((pageIndex) => (
        <button
          key={pageIndex}
          className={`pagination-button ${index === pageIndex ? "active" : ""}`}
          onClick={() => setIndex(handlePage(pageIndex))}
          disabled={index === pageIndex}
        >
          {pageIndex + 1}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => setIndex(handleNextPage(index))}
        disabled={index === total - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pagination-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="pagination-button"
        onClick={() => setIndex(handleLastPage())}
        disabled={index === total - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pagination-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
