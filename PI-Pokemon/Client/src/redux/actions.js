import axios from 'axios';

export const ALL_POKEMON = 'ALL_POKEMON';
export const POKEMON_BY_NAME = 'POKEMON_BY_NAME';
export const FILTER_POKEMON_TYPE = 'FILTER_POKEMON_TYPE';
export const ORDER_POKEMON ='ORDER_POKEMON';
export const GET_ALL ='GET_ALL';
export const ORIGIN = 'ORIGIN';

export const getAllPokemon = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/pokemons`);
            // const eData =  data.map(element => element)
            
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
            const { data } = await axios(`http://localhost:3001/pokemons?name=${name}`)

            return dispatch({
                type: POKEMON_BY_NAME,
                payload: data
            })
        } catch (error) {
            return alert('That Pokemon is not here!')
        }
    }
};

export const filterPokemonType = (type) => {
    return {
        type: FILTER_POKEMON_TYPE,
        payload: type
    }
};

export const orderPokemon = (order) => {
    return {
        type: ORDER_POKEMON,
        payload: order
    }
};

export const filterOrigin = (origin) => {
    return {
        type: ORIGIN,
        payload: origin
    }
}

export const getAllAgain = () => {
    return {
        type: GET_ALL,
    }
} 
