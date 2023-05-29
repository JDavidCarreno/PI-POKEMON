const axios = require('axios');
const { Pokemon } = require('../db');

const getPoById = async(req, res) => {
    try {
        const { id } = req.params;

        if(id.length > 10) {
            const pokemon = await Pokemon.findOne({
                where: {
                    id
                }
            });

            if(!pokemon) return res.status(402).send('not found');

            return res.status(200).json(pokemon);
        };

        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);

            return res.status(200).json({
                    id: data.id,
                    name: data.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[0].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight:data.weight,
                    image:data.sprites.other.dream_world.front_default,
                    types:data.types.map(type => type.type.name)
            });


    } catch (error) {
        return res.status(400).json({error: error.message})
    }

};

module.exports = getPoById;