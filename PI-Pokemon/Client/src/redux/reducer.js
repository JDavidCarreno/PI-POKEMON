import { ALL_POKEMON, POKEMON_BY_NAME } from "./actions";

const initialState = {
    allPokemons: [],
    poke: [{}]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKEMON:
            return {
                ...state,
                allPokemons: [...initialState.allPokemons, action.payload]
            }

        case POKEMON_BY_NAME:
            return {
                ...state,
                poke: [action.payload]
            }

        default: 
        return{
            ...state
        }
    }
};

export default reducer;