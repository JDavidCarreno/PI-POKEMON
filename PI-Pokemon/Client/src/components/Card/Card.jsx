
import styles from './Card.module.css';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Card = ({ name, ataque, defensa, types, image, vida, id }) => {
    
    // const [info, setInfo] = useState({
    //     detail: [],
    //     image: '',
    //     attack: 0,
    //     defense: 0,
    //     hp: 0
    // });

    // const getInfo = async() => {
    //     if (url) {
    //         const info = await axios(url);
    //         const detail = info.data;
    //         setInfo({
    //             detail: detail,
    //             image: detail.sprites.front_default,
    //             attack: detail.stats[1].base_stat,
    //             defense: detail.stats[2].base_stat,
    //             hp: detail.stats[0].base_stat
    //         });
    //     } else {
    //         setInfo({
    //             detail: [...info, types],
    //             image: image,
    //             attack: ataque,
    //             defense: defensa,
    //             hp: vida
    //         })
    //     }
    // };

    // getInfo();

    return (
        <div className={styles.container}>
            <h2><Link to={`/detail/${id}`}> {name} </Link></h2>
            {/* <div className={styles.types}>
                {
                    info.detail.types?.map((type, index) => {
                        return (
                            <h3 key={index}>{type.type.name}</h3>
                        )
                    })
                }
            </div> */}
            {
                // eslint-disable-next-line react/prop-types
                types?.map((type, index) => {
                    return <h4 key={index}>{type}</h4>
                })
            }
            {
                image ? <img className={styles.img} src={image} alt={name} /> : <div className={styles.lds_dual_ring}></div>
            }
            <div className={styles.powerContainer}>
                <label>
                    ATT 
                    <h5>{ataque}</h5>
                </label>
                <label>
                    DEF
                    <h5>{defensa}</h5>
                </label>
                <label>
                    HP
                    <h5>{vida}</h5>
                </label>
            </div>

        </div>
    )
};

export default Card;