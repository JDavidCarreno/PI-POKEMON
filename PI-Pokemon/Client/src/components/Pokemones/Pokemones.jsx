/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterOrigin, filterPokemonType, getAllPokemon, orderPokemon } from '../../redux/actions';
import { Link } from "react-router-dom";
import Card from '../Card/Card';
import styles from './Pokemones.module.css';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Pokemones = ({ onStart, pokemonsPerPage, currentPage, setPokemonsPerPage, setCurrentPage, allPokemons }) => {

    const [types, setTypes] = useState([]);

    const [auxFilter, setAuxFilter] = useState(false);
    const [aux, setAux] = useState(false);
    
    const dispatch = useDispatch();
    
    const Pokemons = useSelector(state => state.toShow);
    const length = Pokemons?.length;

    const handleFilter = (event) => {
        dispatch(filterPokemonType(event.target.value));
        setCurrentPage(1)
    };
    
    const handleOrder = (event) => {
        dispatch(orderPokemon(event.target.value));
        setAux(!aux)
        setCurrentPage(1)
    };

    const handleOrigin = (event) => {
        dispatch(filterOrigin(event.target.value));
        setCurrentPage(1)
    };

    const lastIndex = currentPage * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;

    const onFilters = () => {
        setAuxFilter(!auxFilter)
        // dispatch(filterPokemonType());
    };

    useEffect(() => {
        onStart();
        dispatch(getAllPokemon());
        axios("https://pokeapi.co/api/v2/type/")
        .then(({data}) => {
            setTypes(data.results.map(name=> name.name))
        })
    }, []);
    
    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <div className={styles.divBotones}>
                    <Link to='/form'>
                        <span className={styles.aFilters}>Create</span>
                    </Link>
                    <span className={styles.aFilters} onClick={onFilters}>Filters</span>
                </div>
                {
                    auxFilter ? <div className={styles.filters}>
                        <label >By type
                            <select onChange={handleFilter}>
                                {
                                    // eslint-disable-next-line react/prop-types
                                    types?.map((type, index) => {
                                        return (
                                            <option key={index} value={type}>{type}</option>
                                        )
                                    })
                                }
                            </select>
                        </label>
                        <label >Order by
                            <select onChange={handleOrder}>
                                <option value="" defaultValue={true}>...</option>
                                <option value="AZ">A-Z</option>
                                <option value="ZA">Z-A</option>
                                <option value="A">Ascending attack</option>
                                <option value="D">Descending attack</option>
                            </select>
                        </label>
                        <label >
                            Origin
                            <select onChange={handleOrigin}>
                                <option value=""  defaultValue={true}>...</option>
                                <option value="db">From data base</option>
                                <option value="api">From API</option>
                            </select>
                        </label>
                    </div> : null
                }
            </div>
            <div className={styles.cards}>
                {
                    // eslint-disable-next-line react/prop-types
                    Pokemons?.map((pokemon, index) => {
                        return(
                            <Card 
                                key = {index}
                                id ={pokemon.id}
                                name = {pokemon.name}
                                url = {pokemon.url}
                                ataque={pokemon.attack}
                                defensa={pokemon.defense}
                                types={pokemon.types}
                                image={pokemon.image}
                                vida={pokemon.hp}
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