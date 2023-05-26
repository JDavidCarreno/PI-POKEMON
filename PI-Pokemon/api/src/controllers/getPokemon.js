const { Pokemon } = require('../db');
const axios = require('axios');

const getPokemon = async(req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
            const pokemons = await Pokemon.findAll();
            const results  = await axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281");

            const data = results.data

            return data.results ? res.status(200).json(data.results.concat(pokemons)) : res.status(404).send('Not found')
        };

        const findPokemon = await Pokemon.findOne({
          where: {
            name: name
          }
        });

        if (!findPokemon) {
          const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

          return res.status(200).json({
            id: data.id,
            name: data.name,
            types: data.types,
            height: data.height,
            weight: data.weight
          });
        }

        return res.status(200).json(findPokemon);
        
    } catch (error) {
        return res.status(400).json({error: 'Pokemon not found'})
    }
};

module.exports = getPokemon;

