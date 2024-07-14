import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < 250) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <div>
        <button
          onClick={handlePrevClick}
          className="button-pagination"
        >
          Previous
        </button>
      </div>
      <p className="count-page">{currentPage} / 250</p>
      <div>
        <button
          onClick={handleNextClick}
          className="button-pagination"
        >
          Next
        </button>
      </div>
    </div>
  );
};
