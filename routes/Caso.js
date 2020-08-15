const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");

const Caso = require("../model/Caso");

//obtiene todos los casos
router.get('/', (req, res, next) => {
    casoQuery = Caso.find()
    casoQuery.then(caso => {
        try {
            res.status(200).json({
                caso
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});


router.get('/ByUnidadMedica/:unidad_medica', (req, res, next) => {
    casoQuery = Caso.find( {unidad_medica : req.params.unidad_medica})
    casoQuery.then(caso => {
        try {
            res.status(200).json({
                caso
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get('/BySexo/:sexo', (req, res, next) => {
    casoQuery = Caso.find( {sexo : req.params.sexo})
    casoQuery.then(caso => {
        try {
            res.status(200).json({
                caso
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get('/ById/:id', (req, res, next) => {
    casoQuery = Caso.findOne( {_id : req.params.id})
    casoQuery.then(caso => {
        try {
            res.status(200).json({
                caso
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

router.get('/ByResidencia/:entidad_residencia', (req, res, next) => {
    casoQuery = Caso.find( {entidad_residencia : req.params.entidad_residencia})
    casoQuery.then(caso => {
        try {
            res.status(200).json({
                caso
            });
        }
        catch(error){
            res.status(501).json({
                message: 'Strange error'
            });
            console.log(error);
        }
    }).catch(error => {
        console.log(error);
        res.status(501).json({
            message: 'Error from server'
        });
    });
});

//crea un caso con la info basica
router.post('/crear', (req, res, next) => {
    const caso = new Caso({
        sector: req.body.sector,
        ocupacio: req.body.ocupacio,
        labora: req.body.labora,
        vacunado: req.body.vacunado,
        entidad: req.body.entidad,
        edad: req.body.edad,
        locresi: req.body.locresi,
        sexo: req.body.sexo,
        fechreg: req.body.fechreg,
        mpioresi: req.body.mpioresi,
        entresi: req.body.entresi,
        naciona: req.body.naciona,
        unidad: req.body.unidad,
        resdefin: req.body.resdefin,
    });  
    console.log(caso);
    caso.save().then(caso => {
        res.status(201).json({
            message: 'caso create!',
            caso: caso
        });
    }).catch(error => {
        console.log(error);
        res.status(502).json({
            message: 'error al crear el caso'
        });
    });
});

router.delete("/delete/:id", auth, async (req, res) => {
    Caso.findById({_id: req.params.id}).then(caso =>{
        caso.remove();
        res.send("Caso Eliminado");
    });
  })

module.exports = router;