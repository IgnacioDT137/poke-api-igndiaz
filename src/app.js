// express es el modulo de node que se encarga de crear el servidor
import express from 'express';
// ejs es el modulo de node que permite crear vistas de usuario con html modificado
import ejs from 'ejs';
// estos dos modulos sirven para obtener rutas de archivo mas facilmente
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
// este import trae las rutas desde el archivo router.js
import indexRoutes from './routes/routes.js';
// body-parser para obtener datos de un form request
import bodyParser from 'body-parser';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('json spaces', 2);

app.use(indexRoutes);

app.listen(3000);
console.log('Servidor funcionando en el puerto 3000 con nodemon');