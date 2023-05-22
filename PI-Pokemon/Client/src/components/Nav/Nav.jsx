import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={styles.container}>
            <SearchBar/>
        </div>
    )
};

export default Nav;