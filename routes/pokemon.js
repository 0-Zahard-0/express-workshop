const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

pokemon.post('/', (req, res, next) => {
    return res.status(200).send(req.body);
});
pokemon.get('/', async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM pokemon");
    console.log(pkmn);
    return res.status(200).send(pkmn);
});
pokemon.get('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = await db.query("SELECT * FROM pokemon WHERE pok_id=" + req.params.id + ";");
    (id.length > 0) ?
        res.status(200).send(id) :
        res.status(404).send("pokemon no encontrado");
});

pokemon.get('/:name([A-Za-z]+)', async (req,res, next) =>{
    const name = await db.query("SELECT * FROM pokemon WHERE pok_name='" + req.params.name + "';");
    (name.length > 0) ?
        res.status(200).send(name) :
        res.status(404).send("pokemon no encontrado");
});
module.exports = pokemon;