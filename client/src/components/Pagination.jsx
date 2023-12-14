import { useTranslation } from "react-i18next";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const { t } = useTranslation();

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="products-footer">
      <div className="pagination">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="-ml-px inline-flex items-center px-3 py-2 border border-slate-300 bg-white text-base font-medium text-slate-600 no-underline hover:bg-slate-300 rounded-l-md"
            aria-label="Go to previous page"
          >
            {t("Previous")}
          </button>
        )}

        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className={`-ml-px inline-flex items-center px-3 py-2 border border-slate-300 bg-white text-base font-medium text-slate-600 no-underline hover:bg-slate-300 ${
              pageNumber + 1 === currentPage
                ? "active bg-red-500 text-white"
                : ""
            }`}
            onClick={() => handlePageChange(pageNumber + 1)}
            aria-label={`Go to page ${pageNumber + 1}`}
          >
            {pageNumber + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="-ml-px inline-flex items-center px-3 py-2 border border-slate-300 bg-white text-base font-medium text-slate-600 no-underline hover:bg-slate-300 rounded-r-md"
            aria-label="Go to next page"
          >
            {t("Next")}
          </button>
        )}
      </div>
    </div>
  );
};
