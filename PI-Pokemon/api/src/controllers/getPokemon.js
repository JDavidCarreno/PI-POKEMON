const { Pokemon } = require('../db');
const axios = require('axios');

const getPokemon = async(req, res) => {
    try {
        const { name, offset } = req.query;

        if(!name) {
            const pokemons = await Pokemon.findAll();
            const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
            const results = data.results;

            if( +offset === 1280 ) return results ? res.status(200).json(results.concat(pokemons)) : res.status(404).send('Not found');

            return results ? res.status(200).json(results) : res.status(404).send('Not found')
        };

        const findPokemon = await Pokemon.findOne({
          where: {
            name: name.toLowerCase()
          }
        });

        if (!findPokemon) {
          const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);
          // if (!data) {
          //     throw Error('Pokemon not found');
          // }
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

