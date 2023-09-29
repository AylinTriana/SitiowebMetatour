const express = require('express');
const userModel = require('../models/user');

const router = express.Router();

//Crear usuarios
router.post('/users', (req, res) => {
    const user = userModel(req.body);

    user 
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));

});
 
//Obtener todos los usuarios 
router.get('/users', (req, res) => {
    //res.send(Usuario Creado);

    userModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
        
});

//Buscar un usuario
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userModel
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Actualizar un usuario
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, cedula, telefono, correo, direccion, ciudad, profesion, cargo, salario
    } = req.body;
    userModel
        .updateOne({ _id: id }, { $set: { nombre, apellido, cedula, telefono, correo, direccion, ciudad, profesion, cargo, salario
        } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un usuario 
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userModel
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
}); 

module.exports = router;

