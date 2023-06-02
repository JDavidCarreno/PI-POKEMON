import { Link } from "react-router-dom";
import img from '../../assets/landing.jpg'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemon } from "../../redux/actions";
import styles from './Landing.module.css';

// eslint-disable-next-line react/prop-types, no-unused-vars
const Landing = ({onStart}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon)
    })

    return (
        <div className={styles.container}>
            <img src={img} alt="pokemones" />
            <div className={styles.welcome}>
            <h1>WELCOME!</h1>
                <Link to='/home'>
                    <span onClick={()=> onStart()}>START!</span>
                </Link>
            </div>
        </div>
    )
};

export default Landing;