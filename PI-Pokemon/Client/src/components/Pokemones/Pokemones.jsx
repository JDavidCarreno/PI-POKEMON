/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon } from '../../redux/actions';
import Card from '../Card/Card';
import styles from './Pokemones.module.css';
import Pagination from '../Pagination/Pagination';

// eslint-disable-next-line react/prop-types
const Pokemones = ({ pokemons, length, onStart }) => {

    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage

    useEffect(() => {
        onStart();
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    // eslint-disable-next-line react/prop-types
                    pokemons?.map((pokemon, index) => {
                        return(
                            <Card 
                                key = {index}
                                name = {pokemon.name}
                                url = {pokemon.url}
                                ataque={pokemon.ataque}
                                defensa={pokemon.defensa}
                                types={pokemon.types}
                                image={pokemon.image}
                                vida={pokemon.vida}
                            />
                        )
                    }).slice(firstIndex, lastIndex)
                }
            </div>
            <Pagination
                pokemonsPerPage={pokemonsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                length={length}
             />
        </div>
    )
};

export default Pokemones;