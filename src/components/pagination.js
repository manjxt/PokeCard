import React from "react";
import "./pgstyle.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div id="pagination-container">
      <button
        id="previous"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span id="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        id="next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
