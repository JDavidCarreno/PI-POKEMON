import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  let [pokemones, setPokemones] = useState([]);

    // const dispatch = useDispatch();

    // const allPokemons = useSelector((state) => state.allPokemons); 


  const getPokemones = async (offset) => {
      const   results  = await axios(`http://localhost:3001/pokemons?offset=${offset}`);  
      setPokemones ([results]);
  };
    
  useEffect( () => {
      getPokemones(20)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home pokemones={pokemones}/>}/>
      </Routes>
    </div>
  );
}

export default App;
