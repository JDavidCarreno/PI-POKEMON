// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllPokemon } from "../../redux/actions";
// import Card from "../Card/Card";


// const Cards = () => {

//     let [pagination, setPagination] = useState(0);

//     const dispatch = useDispatch();

//     const allPokemons = useSelector((state) => state.allPokemons); 
    
//     useEffect(() => {
//         dispatch(getAllPokemon(pagination))
//     }, [])



//     return (
//         <div>
//             {
//                 allPokemons?.map((pokemon, index) => {
//                     return(
//                         <Card 
//                             key = {index}
//                             name= {pokemon.name}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// };

// export default Cards;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon } from "../../redux/actions";
import Card from "../Card/Card";


const Cards = () => {

    let [pagination, setPagination] = useState(0);

    const dispatch = useDispatch();
    
    const allPokemons = useSelector((state) => state.allPokemons); 
    
    useEffect(() => {
        dispatch(getAllPokemon(pagination))
    }, [])



    return (
        <div>
            {
                allPokemons?.map((pokemon, index) => {
                    return(
                        <Card 
                            key = {index}
                            name= {pokemon.name}
                        />
                    )
                })
            }
        </div>
    )
};

export default Cards;