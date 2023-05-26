import axios from 'axios';

export const ALL_POKEMON = 'ALL_POKEMON';
export const POKEMON_BY_NAME = 'POKEMON_BY_NAME';

export const getAllPokemon = () => {
    return async (dispatch) => {
        try {
            const data = await axios(`http://localhost:3001/pokemons`);
            
            return dispatch({
                type: ALL_POKEMON,
                payload: data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
};

export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const data = await axios(`http://localhost:3001/pokemons/${name}`)

            return dispatch({
                type: POKEMON_BY_NAME,
                payload: data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
};


