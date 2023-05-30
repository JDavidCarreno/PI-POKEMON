import { Routes, Route, useLocation  } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import Pokemones from './components/Pokemones/Pokemones';
import { useDispatch } from 'react-redux';
// import { getPokemonByName } from './redux/actions';
import { getAllPokemon } from "./redux/actions";
import { useEffect, useState } from 'react';

// import { useEffect, useState } from "react";
// import axios from 'axios';
import Detail from './components/Detail/Detail';

function App() {

  const location = useLocation();
  
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);


  const dipatch = useDispatch();

  const onStart = () => {
    dipatch(getAllPokemon());
  };

  useEffect(() => {
    dipatch(getAllPokemon());
}, []);

  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav/>
      }
      <Routes>
        <Route path='/' element={<Landing onStart={onStart}/>}/>
        <Route path='/home' element={<Pokemones onStart={onStart} length={length}  pokemonsPerPage={pokemonsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} setPokemonsPerPage={setPokemonsPerPage}/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
