import { Router, urlencoded } from "express";
import pokedex from "./pokedex.js";
import cors from "cors";

const router = Router();

router.use(cors)

router.get('/', function(req, res) {
    res.render('home')
});

router.get('/api/pokemones', function(req, res) {
    res.json(pokedex);
});

router.get('/api/pokemon/:id', function(req, res) {
    const pokemon = pokedex.find(item => item.id.toString() === (req.params.id));
    res.json(pokemon);
});

export default router;
