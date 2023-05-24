

export const ALL_POKEMON = 'ALL_POKEMON';


export const getAllPokemon = (offset) => {
    return async (dispatch) => {
        try {
            const data  = await fetch(`http://localhost:3001/pokemons?offset=${offset}`);
            const pokemones = data.json();

            return dispatch({
                type: ALL_POKEMON,
                payload: pokemones
            })
        } catch (error) {
            return {error: error.message}
        }
    }
};

