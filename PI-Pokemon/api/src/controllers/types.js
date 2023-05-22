const { Type } = require('../db');
const axios = require('axios');

const types = async(req, res) => {
    try {
        const { data } = await axios('https://pokeapi.co/api/v2/type/');
        const results = data.results;

        const newType = await Type.bulkCreate(results);

        return res.status(200).json(newType);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = types;