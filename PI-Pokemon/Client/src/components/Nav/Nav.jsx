import img from '../../assets/img.png'
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { getAllAgain, getAllPokemon } from "../../redux/actions";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Nav = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getAll = () => {
        dispatch(getAllAgain());
        dispatch(getAllPokemon())
        navigate('/home')
    }

    const location = useLocation();

    return (
        <div className={styles.container}>
            <img className={styles.img} src={img} alt="pokemon-logo" />
            {
                location.pathname !== '/form' && <SearchBar setCurrentPage={setCurrentPage}/> 
            }
            <button className={styles.allbtn} onClick={getAll}> SEE ALL </button>
        </div>
    )
};

export default Nav;