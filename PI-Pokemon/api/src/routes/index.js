const { Router } = require('express');
const getPokemon = require('../controllers/getPokemon');
const getPoById = require('../controllers/getPoById');
const postPokemon = require('../controllers/postPokemon');
const types = require('../controllers/types');
const createType = require('../controllers/createType')



const router = Router();

router.get('/pokemons/', getPokemon);
router.get('/pokemons/:id', getPoById);
router.post('/pokemons/', postPokemon);
router.get('/types', types);
router.post('/types/create', createType)



module.exports = router;
