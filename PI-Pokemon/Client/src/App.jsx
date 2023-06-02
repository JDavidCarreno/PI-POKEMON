import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import Pokemones from './components/Pokemones/Pokemones';
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux';
import { getAllPokemon } from "./redux/actions";
import { useEffect, useState } from 'react';
import Detail from './components/Detail/Detail';
import axios from 'axios';

function App() {

  const location = useLocation();
  
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [aux, setAux] = useState(false);


  const dipatch = useDispatch();

  const onStart = async() => {
    dipatch(getAllPokemon());
    if (aux === false) {
      axios.get('http://localhost:3001/types');
      setAux(true)
    }
  };

  useEffect(() => {
    dipatch(getAllPokemon());
}, []);

  return (
    <div className="App">
      {
        location.pathname !== '/' && <Nav setCurrentPage={setCurrentPage}/>
      }
      <Routes>
        <Route path='/' element={<Landing onStart={onStart}/>}/>
        <Route path='/home' element={<Pokemones onStart={onStart} length={length}  pokemonsPerPage={pokemonsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} setPokemonsPerPage={setPokemonsPerPage}/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
