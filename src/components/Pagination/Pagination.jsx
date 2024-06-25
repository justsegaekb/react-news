import styles from './styles.module.css'

const Pagination = ({handlePageClick, handlePrevPage, handleNextPage, currentPage,  totalPages }) => {
    return (
        <div className={styles.pagination}>
            <button className={styles.arrow}
                    onClick={handlePrevPage}
                    disabled={currentPage <= 1}
            >{'<'}
            </button>
            <div className={styles.list}>
                { [...Array(totalPages)].map((_, i) => (
                    <button key={i}
                            onClick={() => handlePageClick(i + 1)}
                            className={styles.pageNumber}
                            disabled={currentPage === i + 1}

                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <button className={styles.arrow}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </div>
    );
}

export default Pagination;