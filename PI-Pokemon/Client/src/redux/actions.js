import axios from 'axios';

export const ALL_POKEMON = 'ALL_POKEMON';


export const getAllPokemon = (offset) => {
    const endpoint = 'http://localhost:3001/pokemons?offset=';
    return async (dispatch) => {
        try {
            const data  = await axios.get(endpoint + offset);

            return dispatch({
                type: ALL_POKEMON,
                payload: data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
};

console.log( getAllPokemon(0));
