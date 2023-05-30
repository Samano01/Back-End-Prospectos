const { response } = require('express');
const Registrar = require('../models/register')

const AgregarProspecto = async(req, res =  response) => {

    const prospectos = new Registrar(req.body);

    try {
        await prospectos.save();

        res.status(201).json({
            ok: true,
            msg: 'registro'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const getProspectos = async(req, res =  response) => {

    const prospectos = await Registrar.find();

    res.status(201).json({
        ok: true,
        prospectos
    })
}

const ActualizarProspecto = async(req, res =  response) => {

    const id = req.params.id;

    try {

        const prospecto =  await Registrar.findById(id);

        const nuevoaactualizar = {
            ...prospecto,
            ...prospecto.status = 1
        }

        const ProspectoActualizado  = await Registrar.findByIdAndUpdate(id, nuevoaactualizar, {new: true});

        res.status(201).json({
            ok: true,
            prospecto: ProspectoActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

    
}


const RechazarProspecto = async(req, res =  response) => {

    const id = req.params.id;

    try {

        const prospecto =  await Registrar.findById(id);

        const nuevoaactualizar = {
            ...prospecto,
            ...prospecto.status = 2
        }

        const ProspectoActualizado  = await Registrar.findByIdAndUpdate(id, nuevoaactualizar, {new: true});

        res.status(201).json({
            ok: true,
            prospecto: ProspectoActualizado
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

    
}

module.exports = {
    AgregarProspecto,
    getProspectos,
    ActualizarProspecto,
    RechazarProspecto
}