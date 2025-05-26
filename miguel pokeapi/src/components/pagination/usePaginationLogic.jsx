export const usePaginationLogic = (total) => {
  const handleFirstPage = () => {
    return 0;
  };

  const handleLastPage = () => {
    return total - 1;
  };

  const handleNextPage = (index) => {
    if (index < total - 1) {
      return index + 1;
    }
    return index;
  };
  const getNumberOfPages = () => {
    if (window.innerWidth < 600) return 0;
    else return 4;
  };
  const handlePreviousPage = (index) => {
    if (index > 0) {
      return index - 1;
    }
    return index;
  };

  const handlePage = (pageIndex) => {
    return pageIndex;
  };
  const getVisibleIndexes = (index, visiblePages = 5) => {
    const half = Math.floor(visiblePages / 2);
    let start = Math.max(0, index - half);
    let end = start + visiblePages;

    if (end > total) {
      end = total;
      start = Math.max(0, end - visiblePages);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return {
    handleFirstPage,
    handleLastPage,
    handleNextPage,
    handlePreviousPage,
    handlePage,
    getVisibleIndexes,
    getNumberOfPages,
  };
};
