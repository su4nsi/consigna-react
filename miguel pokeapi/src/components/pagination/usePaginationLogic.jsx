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

  const handlePreviousPage = (index) => {
    if (index > 0) {
      return index - 1;
    }
    return index;
  };

  const handlePage = (pageIndex) => {
    return pageIndex;
  };

  return {
    handleFirstPage,
    handleLastPage,
    handleNextPage,
    handlePreviousPage,
    handlePage,
  };
};
