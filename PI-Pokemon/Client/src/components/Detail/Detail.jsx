import axios from "axios";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/pokemons/${id}`)
        .then(({data}) => {
            if(data.name) {
                setPokemon(data)
            } else {
                window.alert('Not found')
            }
        })
    }, [id])

    return (
        <div className={styles.container}>
            <h1>{pokemon.name}`s details</h1>
            <div className={styles.containerAll}>
                <figure > 
                    <img src={pokemon.image} alt={pokemon.name} className={styles.figure}/>
                </figure>

                <div className={styles.rightPart}>
                    <div className={styles.types}>
                        <h2>Types:</h2>

                        {
                            pokemon.types?.map((type, index)=> {
                                return <p key={index} className={styles.p}>{type}</p>
                            })
                        }
                    </div>
                    <div className={styles.containerStats}>
                        <h3>Stats: </h3>
                        <div className={styles.containerLabels}>
                            <label >
                                ATT:
                                <h4>{pokemon.attack}</h4>
                            </label>
                            <label >
                                DEF:
                                <h4>{pokemon.defense}</h4>
                            </label>
                            <label >
                                HP:
                                <h4>{pokemon.hp}</h4>
                            </label>
                            <label >
                                SPEED:
                                <h4>{pokemon.speed}</h4>
                            </label>
                        </div>
                    </div>
                    <div className={styles.final}>
                        <h3>WEIGHT: {pokemon.weight}</h3>
                        <h4>Id: {pokemon.id}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;