import { useState } from 'react';
import searchLogo from '../../assets/searchLogo.svg';
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../redux/actions';

// eslint-disable-next-line react/prop-types
const SearchBar = () => {

    let [name, setName] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return(
        <div className={styles.container}>
            <input type="search"  onChange={handleChange} value={name}/>
            <button onClick={() => {dispatch(getPokemonByName(name)); setName('')}}><img src={searchLogo} className={styles.button} alt="searchLogo" /></button>
        </div>
    )
};

export default SearchBar;

// () => {onSearch(name)