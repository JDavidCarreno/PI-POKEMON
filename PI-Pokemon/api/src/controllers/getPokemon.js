const { Pokemon } = require('../db');
const axios = require('axios');

const getPokemon = async(req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
            const pokemons = await Pokemon.findAll();
            const { data } = await axios('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281');
            const results = data.results;

            return results ? res.status(200).json(results.concat(pokemons)) : res.status(404).send('Not found')
        }

        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

        if (data) {
            return res.status(200).json({
              id: data.id,
              name: data.name,
              types: data.types,
              height: data.height,
              weight: data.weight,
              sprites: data.sprites
            });
          }

          const findPokemon = await Pokemon.findOne({
            where: {
              name
            }
          });
      
          if (!findPokemon) {
            return res.status(404).send('Pokemon not found');
          }
      
          return res.status(200).json(findPokemon);
      
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = getPokemon;

