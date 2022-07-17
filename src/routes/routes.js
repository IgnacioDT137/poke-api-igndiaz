import { Router, urlencoded } from "express";
import pokedex from "./pokedex.js";

const router = Router();

router.get('/', function(req, res) {
    res.render('home')
});

router.get('/api/pokemones', function(req, res) {
    res.json(pokedex);
});

router.post('/api/pokemon', function(req, res) {
    const pokemon = pokedex.find(item => item.id === parseInt(req.body.id));
    res.json(pokemon);
});

export default router;
