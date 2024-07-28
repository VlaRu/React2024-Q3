import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalCount,
}) => {
  return (
    <div className="pagination-container">
      <div>
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          className="button-pagination"
        >
          Previous
        </button>
      </div>
      <p className="count-page">
        {currentPage} / {totalCount}
      </p>
      <div>
        <button
          onClick={() => {
            if (currentPage < totalCount) {
              setCurrentPage(currentPage + 1);
            }
          }}
          className="button-pagination"
        >
          Next
        </button>
      </div>
    </div>
  );
};
