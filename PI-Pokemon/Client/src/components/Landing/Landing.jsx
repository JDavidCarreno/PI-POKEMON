import { Link } from "react-router-dom";
import image from '../../assets/fondo.jpg'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemon } from "../../redux/actions";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Landing = ({onStart}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPokemon)
    })

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