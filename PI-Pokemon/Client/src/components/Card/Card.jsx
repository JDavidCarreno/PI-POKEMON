
import styles from './Card.module.css';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Card = ({ name, ataque, defensa, types, image, vida, id }) => {


    return (
        <div className={styles.container}>
            {
                image ? <img className={styles.img} src={image} alt={name} /> : null
            }
            <h2><Link to={`/detail/${id}`}> {name} </Link></h2>
            <div>
                {
                    // eslint-disable-next-line react/prop-types
                    types?.map((type, index) => {
                        return <h4 key={index}>{type}</h4>
                    })
                }
            </div>
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