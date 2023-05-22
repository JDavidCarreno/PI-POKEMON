// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllPokemon } from "../../redux/actions";
import Card from "../Card/Card";
// import axios from "axios";


const Cards = (props) => {

    // let [pagination, setPagination] = useState(0);

    // let [pokemones, setPokemones] = useState([]);

    // const dispatch = useDispatch();

    // const allPokemons = useSelector((state) => state.allPokemons); 


    // const getPokemones = async (offset) => {
    //     const  data  = await axios(`http://localhost:3001/pokemons?offset=${offset}`);
    //     // let results = data.results;
        
    //     setPokemones(pokemones => [...pokemones, data]);
    // };
    
    // useEffect( () => {
    //    getPokemones(20)
    // }, [])

    // eslint-disable-next-line react/prop-types
    const characters = props.pokemones;
    // eslint-disable-next-line react/prop-types
    const info = characters?.map(element => {
        return element.data;
    })

    console.log(info);

    return (
        <div className="container">
            {
                // eslint-disable-next-line react/prop-types
                info.map((pokemon, index) => {
                    return(
                        <Card 
                            key = {index}
                            // eslint-disable-next-line react/prop-types
                            name= {pokemon.name}
                        />
                    )
                })
            }
        </div>
    )
};

export default Cards;


