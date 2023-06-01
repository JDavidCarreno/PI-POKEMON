import { useEffect, useState } from "react";
import axios from 'axios';
import validations from "./validations";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [types, setTypes] = useState([]);
    const [input, setInput] =useState({
        name:'',
        image:'',
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        weight: null,
        types: []
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [aux, setAux] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAux(true)
    
        if (name === "types") {
            const selectedTypes = Array.from(event.target.selectedOptions, (option) => Number(option.value));
            setInput((prevInput) => ({
                ...prevInput,
                types: selectedTypes
            }));
        } else {
            setInput((prevInput) => ({
                ...prevInput,
                [name]: value
            }));
        }
    
        setErrors(validations({
            ...input,
            [name]: value
        }));
    };
    

    const handleSubmit = async (event) => {
        if (Object.keys(errors).length === 0) {
            event.preventDefault();
            try {
                await axios.post('http://localhost:3001/pokemons', input);
                alert('Pokemon created');
                navigate('/home')
            } catch (error) {
                alert('This pokemos is already around!')
            }
    }};

    useEffect(() => {
        axios("https://pokeapi.co/api/v2/type/")
        .then(({data}) => {
            setTypes(data.results.map(name=> name.name))
        })
    }, [])

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label >Name:*</label>
                <input type="text" name="name"  onChange={handleChange}/>
                {
                    errors.name && (<p>{errors.name}</p>)
                }
                <label >Image:* copy the link</label>
                <input type="text" name="image"  onChange={handleChange}/>
                {
                    errors.image && (<p>{errors.image}</p>)
                }
                <label >Hp:*</label>
                <input type="number" name="hp"  onChange={handleChange}/>
                {
                    errors.hp && (<p>{errors.hp}</p>) 
                }
                <label >Attack:*</label>
                <input type="number" name="attack"  onChange={handleChange}/>
                {
                    errors.attack && (<p>{errors.attack}</p>)
                }
                <label >Defense:*</label>
                <input type="number" name="defense"  onChange={handleChange}/>
                {
                    errors.defense && (<p>{errors.defense}</p>)
                }
                <label >Speed:</label>
                <input type="number" name="speed"  onChange={handleChange}/>
                <label >Weigth:</label>
                <input type="number" name="weight" onChange={handleChange}/>
                <label >Select types:</label>
                <select multiple onChange={handleChange} name="types">
                    {
                        types?.map((type, index) => {
                            return (
                                <option key={index} value={(index + 1)}>{type}</option>
                            )
                        })
                    }
                </select>

                <button type="submit" disabled={Object.keys(errors).length !== 0 || aux === false}>CREATE</button>
                
            </form>
        </div>
    )
};

export default Form;