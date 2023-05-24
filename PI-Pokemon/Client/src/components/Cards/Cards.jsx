import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllPokemon } from "../../redux/actions";
import Card from "../Card/Card";
import axios from "axios";
import styles from "./Cards.module.css";


const Cards = () => {

    const [pagination, setPagination] = useState({
        pagina: 1,
        offset: 0
    });

    let [pokemones, setPokemones] = useState([]);

    
    const getPokemones = async (offset) => {
        const   results  = await axios(`http://localhost:3001/pokemons?offset=${offset}`);  
        setPokemones ([results]);
    };
    
    useEffect( () => {
        getPokemones(pagination.offset)
    }, [pagination.offset])

    // eslint-disable-next-line react/prop-types
    const characters = pokemones;
    // eslint-disable-next-line react/prop-types

    const handleNext = () => {
        setPagination({
            pagina: pagination.pagina + 1,
            offset: pagination.offset + 20
        });
        // eslint-disable-next-line react/prop-types
        getPokemones(pagination.offset);
    };

    const handlePrevious = () => {
        if (pagination.pagina > 1) {
            setPagination({
                pagina: pagination.pagina - 1,
                offset: pagination.offset - 20
            })
        }
    }

    // eslint-disable-next-line react/prop-types
    const info = characters?.map ( (element) => {
        return element.data;
    })

    const show = info[0];


    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    // eslint-disable-next-line react/prop-types
                    show?.map((pokemon, index) => {
                        return(
                            <Card 
                                key = {index}
                                // eslint-disable-next-line react/prop-types
                                name= {pokemon.name}
                                url = {pokemon.url}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrevious}>Anterior</button>
                <span>{pagination.pagina}</span>
                <button onClick={handleNext}>Siguiente</button>
            </div>
        </div>
    )
};

export default Cards;




