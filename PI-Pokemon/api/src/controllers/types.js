const { Type } = require('../db');
const axios = require('axios');

const types = async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = types;