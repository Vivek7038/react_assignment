import React from "react";
import Button from "./Button";
import "../styles/PaginationBar.css";
import { calculateVisiblePages } from "../utils/paginationUtils";

const PaginationBar = ({
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  onBack,
  hasNextPage,
  hasPreviousPage,
}) => {
  const pages = calculateVisiblePages(currentPage, totalPages);

  return (
    <div className="pagination-container">
      <Button onClick={onBack} disabled={!hasPreviousPage}>
        Prev
      </Button>
      {pages.map((page, index) => (
        <Button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === currentPage || page === "..."}
        >
          {page}
        </Button>
      ))}
      <Button onClick={onNext} disabled={!hasNextPage}>
        Next
      </Button>
    </div>
  );
};

export default PaginationBar;
