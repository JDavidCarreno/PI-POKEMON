const axios = require('axios');
let name = "bulbasaur";

const prueba = async() => {
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data ? {
        id: data.id,
        type: data.type
    }: null;
}

console.log(prueba());