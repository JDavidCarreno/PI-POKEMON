import { Link } from "react-router-dom";
import image from '../../assets/fondo.jpg'

// eslint-disable-next-line react/prop-types, no-unused-vars
const Landing = ({onStart}) => {
    return (
        <div>
            <img src={image} alt="pokemones" />
            <h1>WELCOME!</h1>
            <Link to='/home'>
                <button onClick={()=> onStart()}>START!</button>
            </Link>
        </div>
    )
};

export default Landing;