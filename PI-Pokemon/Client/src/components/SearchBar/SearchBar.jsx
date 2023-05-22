import searchLogo from '../../assets/searchLogo.svg';
import styles from './SearchBar.module.css'

const SearchBar = () => {
    return(
        <div className={styles.container}>
            <input type="search"  />
            <button><img src={searchLogo} className={styles.button} alt="searchLogo" /></button>
        </div>
    )
};

export default SearchBar;