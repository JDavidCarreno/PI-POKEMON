const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemon = require('../controllers/getPokemon');
const getPoById = require('../controllers/getPoById');
const postPokemon = require('../controllers/postPokemon');
const types = require('../controllers/types');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons/', getPokemon);
router.get('/pokemons/:id', getPoById);
router.post('/pokemons/', postPokemon);
router.get('/types', types);
// router.get('/types/get', getTypes)




module.exports = router;
