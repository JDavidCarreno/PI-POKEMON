const { Pokemon } = require('../db');
const { v4: uuidv4 } = require('uuid');

const postPokemon = async(req, res) => {
    try {
        const { name, imagen, vida, ataque, defensa, velocidad, altura, peso, types } = req.body;

        newPokemon.addTypes(types);

        const newPokemon = await Pokemon.create({id: uuidv4(), name, imagen, vida, ataque, defensa,velocidad, altura, peso });


        return res.status(200).json(newPokemon);

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = postPokemon;