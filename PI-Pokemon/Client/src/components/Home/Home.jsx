/* eslint-disable react/prop-types */
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import styles from "./Home.module.css";


const Home = (props) => {


    return (
        <div className={styles.container}>
            <Nav />
            <Cards pokemones = {props.pokemones}/>
        </div>
    )
};

export default Home;