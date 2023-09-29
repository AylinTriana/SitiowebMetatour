const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    cedula:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    profesion:{
        type: String, 
        require: true
    },
    cargo:{
        type: String, 
        require: true
    },
    salario:{
        type: Number,
        require: true
    },
});

module.exports = mongoose.model('user', userModel);