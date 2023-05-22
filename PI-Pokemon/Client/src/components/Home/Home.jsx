import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>HOME</h1>
            <Nav />
            <Cards/>
        </div>
    )
};

export default Home;