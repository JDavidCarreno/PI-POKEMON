const { Type } = require('../db');

const createType = async (req, res) => {
    try {
        const { id, name } = req.body;
        
        const newType = await Type.create({id, name});

        return res.status(200).json(newType)

    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = createType;