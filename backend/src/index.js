//Declarar la constante de express y requiere el modulo de express 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usuarioRutas = require('./routes/user');

//Ejecutar el metodo express nombrado por app
const app = express();
const puerto = 10000;

//Habilitar el puerto
app.listen(puerto,() => console.log('Servidor escucha por el puerto', puerto));

//Crear Rutas 
app.get("/",(req,res) => {
    res.send('Hola Mundo');
});

//middleware
app.use(express.json());
app.use('/api',usuarioRutas);

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

//conexión a la BD
mongoose
    .connect('mongodb+srv://aylintriana35:91152048At99@cluster0.8w6xw7e.mongodb.net/')
    .then(() => console.log('Conectado a MongoDB'))
    .catch((error) => console.log(error));




