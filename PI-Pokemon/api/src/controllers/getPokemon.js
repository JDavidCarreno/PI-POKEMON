const { Pokemon } = require('../db');
const axios = require('axios');


const getPokemon = async(req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
          const pokemons = await Pokemon.findAll();
          // const { data }  = await axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281");

          // const { results } = data

          // return res.status(200).json(results.concat(pokemons))
          // let infoUrl = [];

          // for(let i = 183; i <= 1281; i + 183) {
          //   const url = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${i - 183}limit=${i}`)
          //   const infoUrl1 = url.data.results;
          //   infoUrl = infoUrl.concat(infoUrl1);
          // }

          const url = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
            const infoUrl = url.data.results;

            const pokeInfo = await axios.all(
                infoUrl.map (async (poke) => {
                let info = await axios.get(poke.url)
                return {
                    id: info.data.id,
                    name: info.data.name,
                    hp: info.data.stats[0].base_stat,
                    attack: info.data.stats[1].base_stat,
                    defense: info.data.stats[0].base_stat,
                    speed: info.data.stats[5].base_stat,
                    height: info.data.height,
                    weight: info.data.weight,
                    image: info.data.sprites.other.dream_world.front_default,
                    types: info.data.types.map(type => type.type.name)
                }
                })
            );

            return res.json(pokeInfo.concat(pokemons));
          
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

