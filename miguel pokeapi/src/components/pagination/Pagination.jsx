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
  } = usePaginationLogic(total);

  const visibleIndexes = getVisibleIndexes(index, 5);

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => setIndex(handleFirstPage())}
        disabled={index === 0}
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
