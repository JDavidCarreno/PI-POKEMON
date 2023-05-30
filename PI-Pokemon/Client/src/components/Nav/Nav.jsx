
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { getAllAgain, getAllPokemon } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Nav = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getAll = () => {
        dispatch(getAllAgain());
        dispatch(getAllPokemon())
        navigate('/home')
    }


    return (
        <div className={styles.container}>
            <SearchBar/>
            <button onClick={getAll}>ALL</button>
        </div>
    )
};

export default Nav;