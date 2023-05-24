import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Card.module.css';


const Card = (props) => {
    
    const [info, setInfo] = useState({
        detail: [],
        image: ''
    });

    // eslint-disable-next-line react/prop-types
    const name = props.name;
    // eslint-disable-next-line react/prop-types
    const url = props.url;


    const getInfo = async() => {
        const info = await axios(url);
        const detail = info.data;
        setInfo({
            detail: detail,
            image: detail.sprites.front_default
        })
    };

    
    // let sprites = info.sprites;

    // let image = sprites.front_default;

    // console.log(image);

    useEffect(() => {
        getInfo();
    }, [])

    return (
        <div className={styles.container}>
            <h2>{name}</h2>
            {
                info.detail.types?.map((type, index) => {
                    return (
                        <h3 key={index}>{type.type.name}</h3>
                    )
                })
            }
            <img src={info.image} alt="" />

        </div>
    )
};

export default Card;