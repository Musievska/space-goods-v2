import { useNavigate, useLocation } from "react-router-dom";

export const Pagination = ({ totalPages, currentPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="products-footer">
      <div className="pagination">
        {currentPage > 1 && (
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="previous"
            aria-label="Go to previous page"
          >
            Previous
          </button>
        )}

        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className={`page-number ${pageNumber + 1 === currentPage ? "active" : ""}`}
            onClick={() => goToPage(pageNumber + 1)}
            aria-label={`Go to page ${pageNumber + 1}`}
          >
            {pageNumber + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => goToPage(currentPage + 1)}
            className="next"
            aria-label="Go to next page"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};


// const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };
  
//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
  
//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

// const renderPaginationControls = () => (
//     <div className="pagination-controls">
//       {currentPage > 1 && <button onClick={goToPreviousPage}>Previous</button>}
      
//       {[...Array(totalPages).keys()].map(n => (
//         <button
//           key={n + 1}
//           onClick={() => goToPage(n + 1)}
//           className={currentPage === n + 1 ? "active" : ""}
//         >
//           {n + 1}
//         </button>
//       ))}
  
//       {currentPage < totalPages && <button onClick={goToNextPage}>Next</button>}
//     </div>
//   );
  
  

