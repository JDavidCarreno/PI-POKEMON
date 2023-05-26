import { Routes, Route, useLocation  } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import Pokemones from './components/Pokemones/Pokemones';
import { useDispatch, useSelector } from 'react-redux';
// import { getPokemonByName } from './redux/actions';
import { getAllPokemon } from "./redux/actions";
import { useEffect, useState } from 'react';

// import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const location = useLocation();
  
  const allPokemons = useSelector((state) => state.allPokemons[0]?.data)

  let [pokemons, setPokemons] = useState([]);

  const length = pokemons?.length

  const dipatch = useDispatch();


  const onSearch = async(name) => {
    try {
      const pokemon = await axios(`http://localhost:3001/pokemons?name=${name}`);
  
      const data = pokemon.data;

      setPokemons(allPokemons.filter((poke) => poke.name === data.name));

    } catch (error) {
      return alert('Pokemon not found')
    }
  };

  const onStart = () => {
    setPokemons(allPokemons);
    // axios("http://localhost:3001/types");
  }

  const getAll = () => {
    // onStart();
    setPokemons(allPokemons)
  };



  useEffect(() => {
    dipatch(getAllPokemon());
    // axios("http://localhost:3001/types");
}, []);

// console.log(pokemons);

  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav onSearch = {onSearch} getAll={getAll}/>
      }
      <Routes>
        <Route path='/' element={<Landing onStart={onStart}/>}/>
        <Route path='/home' element={<Pokemones onStart={onStart} length={length} pokemons={pokemons}/>}/>
      </Routes>
    </div>
  );
}

export default App;
