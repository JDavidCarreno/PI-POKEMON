const { Pokemon, Type } = require('../db');
const { v4: uuidv4 } = require('uuid');

const postPokemon = async(req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, weight, types } = req.body;

        
        const newPokemon = await Pokemon.create({id: uuidv4(), name, image, hp, attack, defense , speed, weight });
        
        newPokemon.addTypes(types);

        // const newPokemonn = await Pokemon.findByPk(newPokemon.id, {
        //     include: Type
        // });

        // const typess = newPokemonn.Type.map((type) => type.name);

        // newPokemonn.types = typess

        return res.status(200).json(newPokemon);

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = postPokemon;