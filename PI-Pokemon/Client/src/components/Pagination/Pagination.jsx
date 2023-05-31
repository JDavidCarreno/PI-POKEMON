import styles from './Pagination.module.css';

// eslint-disable-next-line react/prop-types
const Pagination = ({pokemonsPerPage, currentPage, setCurrentPage, length}) => {

   const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(length/pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    } 

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return(
        <div className={styles.container}>
            <button disabled={currentPage === 1} onClick={onPreviousPage}>Previous</button>
                {
                    pageNumbers?.map((noPage) => {
                        return(
                            <a className={currentPage === noPage ? styles.selected: null} key={noPage} onClick={() => onSpecificPage(noPage)}>
                                {noPage}
                            </a>
                        )
                    })
                }
            <button disabled={currentPage >= Math.ceil(length/pokemonsPerPage)} onClick={onNextPage}>Next</button>
        </div>
    )
};

export default Pagination;