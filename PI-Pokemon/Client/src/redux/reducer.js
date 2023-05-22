import { ALL_POKEMON } from "./actions";

const initialState = {
    allPokemons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload
            }
    }
};

export default reducer;