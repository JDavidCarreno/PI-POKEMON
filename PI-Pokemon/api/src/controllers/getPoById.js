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

            return res.status(200).json({id: data.id, name: data.name, types: data.types, height: data.height, stats: data.stats});


    } catch (error) {
        return res.status(400).json({error: error.message})
    }

};

module.exports = getPoById;