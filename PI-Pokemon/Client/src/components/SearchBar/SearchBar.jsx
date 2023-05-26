import { useState } from 'react';
import searchLogo from '../../assets/searchLogo.svg';
import styles from './SearchBar.module.css'

// eslint-disable-next-line react/prop-types
const SearchBar = ({onSearch}) => {

    let [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return(
        <div className={styles.container}>
            <input type="search"  onChange={handleChange} value={name}/>
            <button onClick={() => {onSearch(name); setName('')}}><img src={searchLogo} className={styles.button} alt="searchLogo" /></button>
        </div>
    )
};

export default SearchBar;