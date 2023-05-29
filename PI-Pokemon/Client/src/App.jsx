import { Routes, Route, useLocation, useNavigate  } from 'react-router-dom';
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
import Detail from './components/Detail/Detail';

function App() {

  const location = useLocation();
  
  const allPokemons = useSelector((state) => state.allPokemons[0]?.data)
  // const allPokemons = useSelector((state) => state.allPokemons)

  let [pokemons, setPokemons] = useState([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const length = pokemons?.length

  const dipatch = useDispatch();

  console.log(pokemons);


  const onSearch = async(name) => {
    try {
      navigate('/home')
      const pokemon = await axios(`http://localhost:3001/pokemons?name=${name}`);
  
      const data = pokemon.data;

      setPokemons(allPokemons.filter((poke) => poke.name === data.name));
      setCurrentPage(1);


    } catch (error) {
      onStart()
      return alert('Pokemon not found')
    }
  };

  const navigate = useNavigate()
  let counter = 0;

  const onStart = () => {
    dipatch(getAllPokemon());
    setPokemons(allPokemons);
    if (counter < 1) axios("http://localhost:3001/types");
  }

  const getAll = () => {
    onStart();
    navigate('/home')
    setCurrentPage(1)
  };


  useEffect(() => {
    dipatch(getAllPokemon());
}, []);

  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav onSearch = {onSearch} getAll={getAll}/>
      }
      <Routes>
        <Route path='/' element={<Landing onStart={onStart}/>}/>
        <Route path='/home' element={<Pokemones onStart={onStart} length={length} pokemons={pokemons} pokemonsPerPage={pokemonsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} setPokemonsPerPage={setPokemonsPerPage}/>}/>
        <Route path='/detail/:id' element={<Detail getAll={getAll}/>}/>
      </Routes>
    </div>
  );
}

export default App;
