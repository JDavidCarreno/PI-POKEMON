const { Pokemon } = require('../db');
const { v4: uuidv4 } = require('uuid');

const postPokemon = async(req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, weight, types } = req.body;

        const verification = await Pokemon.findOne({
            where: {
                name
            }
        });

        if (verification) throw Error('This pokemons is already around!')
        
        const newPokemon = await Pokemon.create({id: uuidv4(), name, image, hp, attack, defense , speed, weight });
        
        newPokemon.addTypes(types);

        return res.status(200).json(newPokemon);

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = postPokemon;