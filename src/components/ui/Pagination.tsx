import React from "react";
import type { PaginationProps } from "../../interfaces";
import Button from "../ui/Button";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 0) pages.push(i);
    }
    return pages;
  };

  const pageBtnBase = "w-10 h-10 min-w-[40px] rounded-lg text-xs font-black transition-all border flex items-center justify-center";

  return (
    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#1A1A1A] p-4 md:p-5 rounded-2xl border border-gray-800">
      
      <div className="w-full md:w-auto">
        <Button
          variant="border"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &larr; Previous
        </Button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-hide">
        {currentPage > 2 && (
          <>
            <button 
              onClick={() => onPageChange(1)} 
              className={`${pageBtnBase} border-gray-800 cursor-pointer text-gray-500 hover:border-gray-600 hover:text-gray-300`}
            >
              1
            </button>
            <span className="text-gray-700 self-center font-black">...</span>
          </>
        )}

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${pageBtnBase} ${
              currentPage === page
                ? "bg-[#703BF7] border-[#703BF7] cursor-pointer text-white shadow-lg shadow-[#703BF7]/30"
                : "border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300 cursor-pointer"
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - 1 && (
          <>
            <span className="text-gray-700 self-center font-black">...</span>
            <button 
              onClick={() => onPageChange(totalPages)} 
              className={`${pageBtnBase} border-gray-800 cursor-pointer text-gray-500 hover:border-gray-600 hover:text-gray-300`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <div className="w-full md:w-auto">
        <Button
          variant="border"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &rarr;
        </Button>
      </div>
    </div>
  );
};

export default Pagination;