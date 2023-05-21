const axios = require('axios');
const { Pokemon } = require('../db');

const getPoById = async(req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        if(!data) {
            const pokemon = await Pokemon.findOrCreate({
                where: {
                    id
                }
            });
            return res.status(200).json(pokemon);
        };

        return res.status(200).json({id: data.id, name: data.name, types: data.types, height: data.height});

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = getPoById;