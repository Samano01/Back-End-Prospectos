const { Schema, model} = require('mongoose');

const RegisterSchema = Schema({

    nombre: {
        type: String,
        require: true
    },
    paterno: {
        type: String,
        require: true
    },
    materno: {
        type: String,
        require: false
    },
    calle: {
        type: String,
        require: true
    },
    numero: {
        type: Number,
        require: true
    },
    colonia: {
        type: String,
        require: true
    },
    cPostal: {
        type: Number,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    rfc: {
        type: String,
        require: true
    },
    status: {
        type: Number,
        require: true
    },

});

module.exports = model('Registrar', RegisterSchema);