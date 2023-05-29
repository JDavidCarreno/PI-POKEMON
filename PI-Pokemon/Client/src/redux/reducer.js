import { ALL_POKEMON, POKEMON_BY_NAME } from "./actions";

// const getInfo = async(url) => {
//     const info = await axios(url);
//     const data = info.data
// }

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

        // case FILTER_POKEMON_TYPE:
        //     let obj = initialState.allPokemons[0]?.data.map()


            // return {
            //     ...state,

            // }

        default: 
            return{
                ...state
            }
    }
};

export default reducer;