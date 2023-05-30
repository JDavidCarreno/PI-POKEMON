import { ALL_POKEMON, POKEMON_BY_NAME, FILTER_POKEMON_TYPE, ORDER_POKEMON, GET_ALL, ORIGIN } from "./actions";

// const getInfo = async(url) => {
//     const info = await axios(url);
//     const data = info.data
// }

const initialState = {
    allPokemons: [],
    poke: [{}],
    toShow: []
};

const reducer = (state = initialState, action) => {
    let filtered = null;
    let secondFilter = null;
    let thirdFilter = null;
    let fFilter = null;
    switch (action.type) {
        case ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload,
                toShow: action.payload,

            }

        case POKEMON_BY_NAME:
            secondFilter = state.allPokemons.filter(( pokemon)  => pokemon.name === action.payload.name);

            return {
                ...state,
                toShow: secondFilter
            }

        case FILTER_POKEMON_TYPE:
            filtered = state.allPokemons.filter(pokemon => {
                if(pokemon.types.includes(action.payload)) return pokemon
            });
            return {
                ...state,
                toShow: filtered
            }

        case GET_ALL:
            return {
                ...state,
                toShow: state.allPokemons
            }

        case ORIGIN: 
            fFilter = state.allPokemons.filter ((pokemon) => {
                if (action.payload === "db") {
                    if( typeof pokemon.id === 'string') return pokemon
                } else {
                    if(typeof pokemon.id === 'number') return pokemon
                }
            });

            return{
                ...state,
                toShow: fFilter
            }

        case ORDER_POKEMON:
            thirdFilter = state.toShow.sort((a, b) => {
                if (action.payload === 'A') {
                    if(a.attack < b.attack) return -1;
                    if(b.attack < a.attack) return 1;
                    return 0
                }
                else if (action.payload === 'D') {
                    if(a.attack < b.attack) return 1;
                    if(b.attack < a.attack) return -1;
                    return 0;
                } else if (action.payload === 'AZ') {
                    if(a.name < b.name ) return -1;
                    if(b.name < a.name )  return 1;
                    return 0
                } else {
                    if(a.name < b.name) return 1;
                    if(b.name < a.name)  return -1;
                    return 0
                }})

            return {
                ...state,
                toShow: thirdFilter
            }

        default: 
            return{
                ...state
            }
    }
};

export default reducer;