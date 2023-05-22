import { Link } from "react-router-dom";
import image from '../../assets/fondo.jpg'

const Landing = () => {
    return (
        <div>
            <img src={image} alt="pokemones" />
            <h1>WELCOME!</h1>
            <Link to='/home'>
                <button>START!</button>
            </Link>
        </div>
    )
};

export default Landing;