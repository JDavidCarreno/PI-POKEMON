
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"



// eslint-disable-next-line react/prop-types
const Nav = ({onSearch, getAll}) => {


    return (
        <div className={styles.container}>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => getAll()}>ALL</button>
        </div>
    )
};

export default Nav;