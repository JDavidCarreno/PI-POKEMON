

const Card = (props) => {

    // eslint-disable-next-line react/prop-types
    const name = props.name;

    return (
        <div>
            <h2>{name}</h2>
            {/* <h2>{types}</h2>
            <img src={image} alt={name} /> */}
        </div>
    )
};

export default Card;