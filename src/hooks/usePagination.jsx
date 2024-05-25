import { useState, useCallback } from "react";

const usePagination = ({ pageSize, page, totalPage }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const totalPages = totalPage;

  const hasNextPage = currentPage < totalPages;
  const hasPreviousPage = currentPage > 1;

  const next = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const back = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const go = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    currentPage,
    totalPage,
    next,
    back,
    go,
    hasNextPage,
    hasPreviousPage,
  };
};

export default usePagination;

// Parameters
// The usePagination hook accepts an object with the following properties:

// pageSize (number): The number of items per page.
// page (number): The initial page number.
// totalPage (number): The total number of pages.

// Return Values
// The hook returns an object containing the following properties and methods:

// currentPage (number): The current page number.
// totalPage (number): The total number of pages.
// hasNextPage (boolean): A boolean indicating if there are more pages after the current page.
// hasPreviousPage (boolean): A boolean indicating if there are pages before the current page.
// next (function): A function to go to the next page. It accepts a single optional argument (toLastPage: boolean) to directly navigate to the last page.
// back (function): A function to go to the previous page. It accepts a single optional argument (toFirstPage: boolean) to directly navigate to the first page.
// go (function): A function to go to a specific page. It accepts a single argument (pageNumber: number) to navigate to the specified page number.
