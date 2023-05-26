import axios from "axios";
import { useState } from "react";
import styles from './Card.module.css';


// eslint-disable-next-line react/prop-types
const Card = ({ name, url, ataque, defensa, types, image, vida}) => {
    
    const [info, setInfo] = useState({
        detail: [],
        image: '',
        attack: 0,
        defense: 0,
        hp: 0
    });

    const getInfo = async() => {
        if (url) {
            const info = await axios(url);
            const detail = info.data;
            setInfo({
                detail: detail,
                image: detail.sprites.front_default,
                attack: detail.stats[1].base_stat,
                defense: detail.stats[2].base_stat,
                hp: detail.stats[0].base_stat
            })
        } else {
            setInfo({
                detail: [...info, types],
                image: image,
                attack: ataque,
                defense: defensa,
                hp: vida
            })
        }
    };

    getInfo();

    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            <div className={styles.types}>
                {
                    info.detail.types?.map((type, index) => {
                        return (
                            <h3 key={index}>{type.type.name}</h3>
                        )
                    })
                }
            </div>
            <img src={info.image} alt={name} />
            <div className={styles.powerContainer}>
                <label>
                    ATT 
                    <h5>{info.attack}</h5>
                </label>
                <label>
                    DEF
                    <h5>{info.defense}</h5>
                </label>
                <label>
                    HP
                    <h5>{info.hp}</h5>
                </label>
            </div>

        </div>
    )
};

export default Card;