import React from "react";
import Button from "./Button";
import "../styles/PaginationBar.css";
const PaginationBar = ({
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  onBack,
  hasNextPage,
  hasPreviousPage,
}) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="pagination-container">
      <Button onClick={() => onBack()} disabled={!hasPreviousPage}>
        Prev
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </Button>
      ))}
      <Button onClick={() => onNext()} disabled={!hasNextPage}>
        Next
      </Button>
    </div>
  );
};

export default PaginationBar;
