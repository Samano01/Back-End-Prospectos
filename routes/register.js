/*
    Rutas de Registrar Prospectos
    host = localhost:4000/api/register
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { AgregarProspecto, getProspectos, ActualizarProspecto, RechazarProspecto } = require('../controlllers/register');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post(
    '/new', 
    [
        check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
        check('paterno', 'El Apellido Paterno es Obligatorio').not().isEmpty(),
        check('calle', 'La Calle es Obligatorio').not().isEmpty(),
        check('numero', 'El Numero es Obligatorio').not().isEmpty(),
        check('colonia', 'La Colonia es Obligatorio').not().isEmpty(),
        check('cPostal', 'El Codigo Postal es Obligatorio').not().isEmpty(),
        check('telefono', 'El Telefono es Obligatorio').not().isEmpty(),
        check('rfc', 'El RFC es Obligatorio').not().isEmpty(),
        check('status', 'El Status es Obligatorio').not().isEmpty(),
        validarCampos
    ],
    AgregarProspecto
);

router.get(
    '/get', 
    getProspectos
);

router.put(
    '/aceptar/:id', 
    ActualizarProspecto
);

router.put(
    '/rechazar/:id', 
    RechazarProspecto
);



module.exports = router;