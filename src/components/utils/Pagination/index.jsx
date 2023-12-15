/* eslint-disable react/prop-types */
const Pagination = ({ page, maxPage, setPage }) => {
  const handlePrevPage = (page) => {
    if (page < 1) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage((page) => page - 1);
  };

  const handleNextPage = (page) => {
    if (page >= maxPage) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage((page) => page + 1);
  };

  return (
    <div className="flex font-poppins justify-end items-center gap-4 mt-5">
      <button
        className={`bg-secondary hover:bg-accent text-softLight px-3 py-1 rounded-md ${
          page == 1 && "opacity-50"
        }`}
        onClick={handlePrevPage}
        disabled={page == 1}
      >
        prev
      </button>
      <p className="text-softLight text-md">
        {page} of {maxPage}
      </p>
      <button
        className={`bg-secondary hover:bg-accent text-softLight px-3 py-1 rounded-md ${
          page == maxPage && "opacity-50"
        }`}
        onClick={handleNextPage}
        disabled={page == maxPage}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
